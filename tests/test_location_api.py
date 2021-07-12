import unittest
from flight_optimizer.config import Config
from flight_optimizer.requests_api import RequestsAPI
from flight_optimizer.locations_api import LocationsAPI

class LacationAPITestCase(unittest.TestCase):

    def setUp(self):
        self.request = RequestsAPI('https://tequila-api.kiwi.com')
        api_key = Config.get_api_key()
        self.locations_api = LocationsAPI(self.request, api_key)

    def test_get_location(self):
        response = self.locations_api.get_location_obj('london')

        self.assertTrue(response['id'])
        self.assertTrue(data['locations'])

    def test_not_valid_location(self):
        response = self.locations_api.get_location_obj('weefrt')

        self.assertEqual({})

if __name__ == "__main__":
    unittest.main()
