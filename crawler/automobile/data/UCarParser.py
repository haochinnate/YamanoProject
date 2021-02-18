import json
import sys
import datetime
import requests
import urllib3
import logging
from automobile.entities.Manufacturer import Manufacturer
from automobile.entities.CarModel import CarModel
from automobile.entities.TrimLevel import TrimLevel
from urllib.request import urlopen
from bs4 import BeautifulSoup

class UCarParser:

    models_url_prefix = r'https://newcar.u-car.com.tw'

    def __init__(self):
        pass

    @staticmethod
    def get_manufacturers_from_file(json_file_path):
        logging.info("start read: " + str(json_file_path))
        
        manufacturers = []

        with open(json_file_path, 'r', encoding="utf-8") as json_file:
            manufacturers = json.load(json_file, object_hook = Manufacturer.as_manufacturer)

        return manufacturers

    @staticmethod
    def get_models_of_manufacturer(manufacturer):
        models = []

        maker_page = urlopen(manufacturer.url)
        # parse the html using beautiful soup and store in variable `soup`
        soup = BeautifulSoup(maker_page, 'html.parser')

        # Take out the <div> of name and get its value
        _model_class_name_in_maker_page = 'cell_topic_new_r'
        # get the index price
        models_blocks = soup.find_all('div', attrs={'class': _model_class_name_in_maker_page})

        for model in models_blocks:
            p_title = model.find('p', attrs={'class': 'title'})
            model_title = p_title.string

            try:
                a_model_url = p_title.parent
                model_url = a_model_url['href']
            
                model_data = CarModel(model_title, manufacturer.name, UCarParser.models_url_prefix + model_url)
                models.append(model_data)
            except:
                logging.info('Failed:' + model_title)
            else:
                logging.info('Success: ' + model_title + ' ' + str(model_data))

        return models

    @staticmethod
    def save_models_to_file(json_file_path, data):
        with open(json_file_path, 'w+', encoding="utf-8") as outfile:
            json.dump([m.__dict__ for m in data], outfile, indent=4, ensure_ascii=False)
        return 

    @staticmethod
    def get_models_from_file(json_file_path):
        logging.info("start read: " + str(json_file_path))
        
        models = []

        with open(json_file_path, 'r', encoding="utf-8") as json_file:
            models = json.load(json_file, object_hook = CarModel.as_carmodel)

        return models

    @staticmethod
    def analyze_table_to_create_level_objects(model_name, spec_table, equip_table):

        levels_table = []

        for table_row in spec_table.findAll('tr'):
            row_data = []
            model_data = []
            price_data = []
            for idx, column in enumerate(table_row.findAll('td')):
                # class="title_block"
                if "title_block" in column.attrs['class'] and idx == 0:
                    row_data.append(column.text)
                    model_data.append("Model")
                    price_data.append("Price")
                elif "title_block" in column.attrs['class']:
                    for p in column.findAll('p'):
                        if 'text_type' in p.attrs['class']:
                            row_data.append(p.text)
                        elif 'text_number' in p.attrs['class']:
                            price = p.find('strong').text
                            price_data.append(price)
                        # print(p.text)
                        model_data.append(model_name)
                        # print(column, flush=True)
                    # print(column.text + ',', flush=True)

                # class="list" (is spec or equip name)
                if "list" in column.attrs['class'] and idx == 0:
                    row_data.append(column.text)

                if "same" in column.attrs['class']:
                    row_data.extend([column.text] * int(column.attrs['colspan']))

                if "different" in column.attrs['class']:
                    row_data.append(column.text)

            # the row had process completed
            if len(model_data) != 0:
                levels_table.append(model_data)

            if len(row_data) != 0:
                levels_table.append(row_data)

            if len(price_data) != 0:
                levels_table.append(price_data)

        for table_row in equip_table.findAll('tr'):
            row_data = []

            if 'class' in table_row.attrs:
                if "sameequip" in table_row.attrs['class'] or "differentequip" in table_row.attrs['class']:

                    for idx, column in enumerate(table_row.findAll('td')):
                        # the cell of equip name
                        if 'class' in column.attrs:
                            if "list" in column.attrs['class'] and idx == 0:
                                row_data.append(column.text)
                        # the equip cell didn't have any content (blank content)
                        elif column.find('img'):
                            img = column.find('img')
                            if "round.png" in img.attrs['src']:   # "/images/ic_check_round.png"
                                row_data.append("S" + "(" + img.next.strip() + ")")
                            elif "non.png" in img.attrs['src']:   # "/images/ic_16_check_non.png"
                                row_data.append("N")
                            elif "selected" in img.attrs['src']:
                                row_data.append("O" + "(" + img.next.strip() + ")")
                        elif not column.text.strip():
                            row_data.append("N")
                        elif column.text.strip():
                            row_data.append(column.text.strip())

            if len(row_data) != 0:
                levels_table.append(row_data)

        # rotate the table content
        levels_table = [list(i) for i in zip(*levels_table)]

        # levels_table[0] is equipment/spec name, the value is start from 0
        # equipment/spec name set as key in dictionary
        levels = []
        for level in levels_table[1:]:
            trim_level_object = TrimLevel(level[1], '', model_name)
            trim_level_object.data = dict(zip(levels_table[0], level)) 
            levels.append(trim_level_object)
        
        # for each level in levels, formatting the value and change the name of equipment/spec


        # print(levels_table)
        return levels

    @staticmethod
    def get_levels_of_model(model):
        levels = []
        logging.info("start process: " + model.name)

        try:  
            urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
            spec_page = requests.get(model.spec_url, verify=False)
            equip_page = requests.get(model.equip_url, verify=False)

            # parse the html using beautiful soup and store in variable 'soup'
            spec_soup = BeautifulSoup(spec_page.text, 'html.parser')
            equip_soup = BeautifulSoup(equip_page.text, 'html.parser')

            spec_table = spec_soup.find('table', attrs={'class': 'table_compare'})
            equip_table = equip_soup.find('table', attrs={'class': 'table_compare'})

            # call other function to process table and return levels object
            levels = UCarParser.analyze_table_to_create_level_objects(model.name, spec_table, equip_table)
        
        except Exception as e:
            logging.info('Failed: ' + model.name)
            logging.info('    ' + e.__doc__)
            logging.info('    ' + str(e))        
        else:
            logging.info('Success: ' + model.name)

        # https://pythonprogramminglanguage.com/web-scraping-with-pandas-and-beautifulsoup/
        # https://stackoverflow.com/questions/23377533/python-beautifulsoup-parsing-table
        return levels
        
    @staticmethod
    def save_levels_to_file(json_file_path, levels):
        with open(json_file_path, 'w+', encoding="utf-8") as outfile:
            json.dump([l.data for l in levels], outfile, indent=4, ensure_ascii=False)
        return 