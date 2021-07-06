import click
from .config import Config
from .requests_api import RequestsAPI
from .locations_api import LocationsAPI

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
    request = RequestsAPI('https://tequila-api.kiwi.com')
    api_key = Config.get_api_key()
    locations_api = LocationsAPI(request, api_key)
    response = locations_api.locations_query(city_from)
    click.echo(response)

if __name__ == '__main__':
    cli()
