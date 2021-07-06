import requests

class RequestsAPI(object):

    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()

    def get(self, url, **kwargs):
        return self.session.get(self.base_url+url, **kwargs)
