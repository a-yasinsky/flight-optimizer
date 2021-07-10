import concurrent.futures
from .config import Config
from .requests_api import RequestsAPI
from .locations_api import LocationsAPI
from .compute_distances import ComputeDistances
from .aggregation_search_api import AggregationSearchAPI

class FlightOptimizer(object):

    def __init__(self, base_url):
        self.request = RequestsAPI(base_url)
        api_key = Config.get_api_key()
        self.locations_api = LocationsAPI(self.request, api_key)
        self.aggregation_api = AggregationSearchAPI(self.request, api_key)

    def get_location(self, city):
        return self.locations_api.get_location_obj(city)

    def get_price_per_date(self, from_id, to_id, date_from, date_to):
        return self.aggregation_api.price_per_date(
            from_id, to_id,
            date_from.strftime("%d/%m/%Y"), date_to.strftime("%d/%m/%Y")
        )

    def price_per_km(self, city_from, city_to, date_from, date_to):
        city_obj = self.get_location(city_to)
        distance = ComputeDistances.calculate_distance(
            (city_from['location']['lat'], city_from['location']['lon']),
            (city_obj['location']['lat'], city_obj['location']['lon'])
        )
        city_obj['distance'] = distance
        price = self.get_price_per_date(
            city_from['id'], city_obj['id'],
            date_from, date_to
        )
        city_obj['price'] = price
        city_obj['price_per_km'] = price / distance
        return city_obj

    def price_per_km_cities(self, city_from, cities_to, date_from, date_to):
        cities_objs = []
        city_from_obj = self.get_location(city_from)
        if not city_from_obj:
            return cities_objs

        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            futures = []
            for city in cities_to:
                futures.append(
                    executor.submit(self.price_per_km, city_from_obj,
                                    city, date_from, date_to)
                )
            for future in concurrent.futures.as_completed(futures):
                try:
                    city_obj = future.result()
                except Exception as exc:
                    print('Error')
                else:
                    cities_objs.append(city_obj)

        return cities_objs

    def min_price_per_km(self, cities):
        return min(cities, key=lambda x: x['price_per_km'])
