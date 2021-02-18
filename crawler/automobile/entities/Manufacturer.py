class Manufacturer(object):

    def __init__(self, name, level, url):
        self.name = name
        self.level = level
        self.url = url
        # self.spec_list_should_process = spec_list_should_process

    def __str__(self):
        rep = f"Name: {self.name}({self.level}), Url: {self.url}"        
        return rep

    @staticmethod
    def as_manufacturer(dct):
        return  Manufacturer(dct['Name'], dct['Level'], dct['Url'])
