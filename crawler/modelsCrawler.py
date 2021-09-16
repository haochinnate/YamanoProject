from automobile.data.UCarParser import UCarParser
import logging
import os
import time
from pathlib import Path, PurePath

logging.basicConfig(level = logging.INFO)
data_file_root_folder = Path(r'.\automobile\data')
all_models_file = f'AllModels.json'

def models_crawler():
    try:    
        
        # source file of manufacturers
        target_manufacturers_file = 'UcarManufacturers.json' # all manufactures
        manufacturers_source_file_fullpath = data_file_root_folder.joinpath(target_manufacturers_file)

        

        # transfer file to manufacturers objects        
        all_manufacturers = UCarParser.get_manufacturers_from_file(manufacturers_source_file_fullpath)

        all_models = []

        # for manufacturer in all_manufacturers:
        for manufacturer in all_manufacturers[1:4]: # this is for test
            logging.info(f'Current running maker: {manufacturer.name}')
            models_of_manufacturer = UCarParser.get_models_of_manufacturer(manufacturer) 

            all_models.append(models_of_manufacturer)
            
            logging.info(f'Finished running: {manufacturer.name}')


        logging.info(f'crawler finished...')

        # file to store all models
        all_models_file_fullpath = data_file_root_folder.joinpath(all_models_file)
        # save all models of this manufacturer to file
        UCarParser.save_models_to_file(all_models_file_fullpath, all_models)

    except:
        logging.exception('Error when processing...')

    return


models_crawler()
