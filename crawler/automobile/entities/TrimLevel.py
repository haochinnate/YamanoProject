class TrimLevel(object):

    def __init__(self, name, manufacturer, model):
        self.name = name
        self.manufacturer = manufacturer
        self.model = model
        self.data = {}
        
    def __str__(self):
        rep = f"Make: {self.manufacturer}, Model Name: {self.model}(TrimLevel: {self.name})" 
        return rep


