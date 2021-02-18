class CarModel(object):

    def __init__(self, name, manufacturer, url):
        self.name = name
        self.manufacturer = manufacturer
        self.url = url
        self.spec_url = replace_last(url, 'overall', 'spec')
        self.equip_url = replace_last(url, 'overall', 'equip')

    def __str__(self):
        rep = f"Make: {self.manufacturer}, Model Name: {self.name}(Url: {self.url})" 
        return rep

    @staticmethod
    def as_carmodel(dct):  
        return  CarModel(dct['name'], dct['manufacturer'], dct['url'])



def replace_last(source_string, replace_what, replace_with):
    head, _sep, tail = source_string.rpartition(replace_what)
    return head + replace_with + tail

    s = "123123"
    r = replace_last(s, '2', 'x')
