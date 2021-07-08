from .utils import _deep_merge

class LocationsAPI(object):
    def __init__(self, request, api_key):
        self.request = request
        self.headers = {}
        self.form_headers(api_key)

    def form_headers(self, api_key):
        if type(api_key) is dict and 'apikey' in api_key:
            self.headers = api_key

    def form_query_params(self, term):
        params = {}
        params['term'] = term
        params['locale'] = 'en-US'
        params['location_types'] = 'city'
        return params

    def locations_query(self, term=''):
        params = self.form_query_params(term)
        response = self.request.get(
            '/locations/query',
            params = params,
            headers = self.headers
        )

        return response.json()

    def get_city_obj(self, term):
        response = self.locations_query(term)
        if 'locations' in response and len(response['locations']) > 0:
            city = response['locations'][0]
            fields = ['id', 'name', 'location', 'type']
            city_obj = {}
            for field in fields:
                _deep_merge(city, city_obj)
            return city_obj

    def locations_radius(self):
        pass
