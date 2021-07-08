class AggregationSearchAPI(object):
    def __init__(self, request, api_key):
        self.request = request
        self.headers = {}
        self.form_headers(api_key)

    def form_headers(self, api_key):
        if type(api_key) is dict and 'apikey' in api_key:
            self.headers = api_key

    def form_query_params(self, fly_from, fly_to, date_from, date_to):
        params = {}
        params['fly_from'] = fly_from
        params['fly_to'] = fly_to
        params['date_from'] = date_from
        params['date_to'] = date_to
        params['locale'] = 'en'
        params['location_types'] = 'city'
        params['flight_type'] = 'oneway'
        params['curr'] = 'USD'

        return params

    def price_per_date_query(self, fly_from, fly_to, date_from, date_to):
        params = self.form_query_params(fly_from, fly_to, date_from, date_to)
        response = self.request.get(
            '/aggregation_search/price_per_date',
            params = params,
            headers = self.headers
        )

        return response.json()

    def price_per_date(self, fly_from, fly_to, date_from, date_to):
        response = self.price_per_date_query(
            fly_from, fly_to,
            date_from, date_to
        )
        if 'data' in response and len(response['data']) > 0:
            return response['data'][0]['price']
