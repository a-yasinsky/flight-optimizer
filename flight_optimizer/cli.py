import datetime
import click
from .config import Config
from .requests_api import RequestsAPI
from .locations_api import LocationsAPI
from .compute_distances import ComputeDistances
from .aggregation_search_api import AggregationSearchAPI

@click.command()
@click.option("--from", "city_from", required=True,
    help="Departure city",
)
@click.option("--to", "city_to", required=True,
    help="List of potential destination cities",
)
@click.argument('cities_to', nargs=-1)
def cli(city_from, city_to, cities_to):
    print(city_from + " - " + city_to + " " + ",".join(cities_to))
    today = datetime.date.today()
    tomorrow = today + datetime.timedelta(days=1)
    request = RequestsAPI('https://tequila-api.kiwi.com')
    api_key = Config.get_api_key()
    locations_api = LocationsAPI(request, api_key)
    city_from_obj = locations_api.get_city_obj(city_from)
    city_to_obj = locations_api.get_city_obj(city_to)
    distance = ComputeDistances.calculate_distance(
        (city_from_obj['location']['lat'], city_from_obj['location']['lon']),
        (city_to_obj['location']['lat'], city_to_obj['location']['lon'])
    )
    aggregation_api = AggregationSearchAPI(request, api_key)
    price = aggregation_api.price_per_date(
        city_from_obj['id'], city_to_obj['id'],
        today.strftime("%d/%m/%Y"), tomorrow.strftime("%d/%m/%Y")
    )
    click.echo(distance)
    click.echo(price)

if __name__ == '__main__':
    cli()
