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

    def locations_radius(self):
        pass
