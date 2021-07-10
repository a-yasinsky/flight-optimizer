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
        return self.request.get(
            '/locations/query',
            params = params,
            headers = self.headers
        )

    def get_location_obj(self, term):
        response = self.locations_query(term)
        city_obj = {}
        if 'locations' in response and len(response['locations']) > 0:
            city_obj = response['locations'][0]
        else:
            print('No data for: ' + term)

        return self.format(city_obj)

    def format(self, city_obj):
        return {
                'id': city_obj['id'],
                'name': city_obj['name'],
                'location': {
                        'lat': city_obj['location']['lat'],
                        'lon': city_obj['location']['lon']
                    }
                }

    def locations_radius(self):
        pass
