from automobile.data.UCarParser import UCarParser
import logging
import os
import time
from pathlib import Path, PurePath

logging.basicConfig(level = logging.INFO)
data_file_root_folder = Path(r'.\automobile\data')
data_file_makers_folder = data_file_root_folder.joinpath('makers')

def quick_test():
    try:        
        Path(data_file_root_folder.joinpath('maker', 'Skoda')).mkdir(parents=True, exist_ok=True)
        
        # manufacturers_source_file = data_file_root_folder.joinpath('UcarManufacturers.json')
        manufacturers_source_file = data_file_root_folder.joinpath('UcarManufacturers_test.json')
        
        test_maker_file = data_file_makers_folder.joinpath('Audi.json')
        
        # all_manufacturers = UCarParser.get_manufacturers_from_file(manufacturers_source_file)

        # all_models = []

        # # for m in all_manufacturers:
        # #     print(m)   
        # #     models = UCarParser.get_models_of_manufacturer(m) 
        # #     all_models.append(models)

        # models = UCarParser.get_models_of_manufacturer(all_manufacturers[2])
        # # all_models.append(models)
        # all_models += models

        # UCarParser.save_models_to_file(all_models_file, all_models)

        models = UCarParser.get_models_from_file(test_maker_file)


        # levels = UCarParser.get_levels_of_model(models[0])
        # model_path = data_file_root_folder.joinpath('maker', f'Skoda', f'{models[0].name}.json')

        # UCarParser.save_levels_to_file(model_path, levels)

        levels = UCarParser.get_levels_of_model(models[4])        
        model_path = data_file_root_folder.joinpath('makers', f'Audi', f'{models[4].name}.json')
        UCarParser.save_levels_to_file(model_path, levels)
    except:
        logging.exception('Error when processing...')


def start_from_root():
    try:        
        Path(data_file_makers_folder).mkdir(parents=True, exist_ok=True)

        # manufacturers_source_file = data_file_root_folder.joinpath('UcarManufacturers.json')       
        manufacturers_source_file = data_file_root_folder.joinpath('UcarManufacturers_test.json')       
        all_manufacturers = UCarParser.get_manufacturers_from_file(manufacturers_source_file)

        for manufacturer in all_manufacturers:
            logging.info(f'Current running maker: {manufacturer.name}')
            models_of_manufacturer = UCarParser.get_models_of_manufacturer(manufacturer) 

            # folder and file to store models of this manufacturer
            manufacturer_file = data_file_makers_folder.joinpath(f'{manufacturer.name}.json')
            os.mkdir(data_file_makers_folder.joinpath(f'{manufacturer.name}'))

            # save all models of this manufacturer to file
            UCarParser.save_models_to_file(manufacturer_file, models_of_manufacturer)

            start_from_models()
    
            logging.info(f'Finished running: {manufacturer.name}')

        logging.info(f'crawler finished...')
    except:
        logging.exception('Error when processing...')

    return


def start_from_models():
    for path in Path(data_file_makers_folder).iterdir():
        maker_name = path.stem
        if path.is_file():
            logging.info(f'Current running maker: {maker_name}')
            
            # create the folder of specific make, which will store the model.json file
            Path(data_file_makers_folder.joinpath(f'{maker_name}')).mkdir(parents=True, exist_ok=True)            

            # get the model objects from SpecificManufacturer.json
            models = UCarParser.get_models_from_file(path)

            # iterate each model to get the levels of that model
            for model in models:
                logging.info(f'    Model: {model.name}')
                time.sleep(5)
                levels_of_model = UCarParser.get_levels_of_model(model)

                # \maker\manufacutrer\model.json
                model_path = data_file_makers_folder.joinpath(f'{maker_name}', f'{model.name}.json')
                # save the levels information to model.json
                UCarParser.save_levels_to_file(model_path, levels_of_model)

    return


quick_test()
# start_from_root()
# start_from_models()
