class Config(object):
    _API_KEY = 'fUfVhV-v87mtISxkJPlasopiB3mmosJ1'
    DEBUG = True
    TESTING = False

    @staticmethod
    def get_api_key():
        return {'apikey':Config._API_KEY}
