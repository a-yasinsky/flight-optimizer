import requests

class RequestsAPI(object):

    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()

    def get(self, url, **kwargs):
        try:
            response = self.session.get(self.base_url+url, **kwargs)
            response.raise_for_status()
        except requests.exceptions.HTTPError as http_err:
            raise SystemExit(http_err)
        except Exception as err:
            raise SystemExit(err)
        else:
            return response.json()
