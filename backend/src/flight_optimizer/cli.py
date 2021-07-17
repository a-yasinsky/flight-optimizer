import datetime
import click
from .utils import _merge_cities
from .flight_optimizer import FlightOptimizer

@click.command()
@click.option("--from", "city_from", required=True,
    help="Departure city",
)
@click.option("--to", "city_to", required=True,
    help="List of potential destination cities",
)
@click.argument('cities_to', nargs=-1)
def cli(city_from, city_to, cities_to):
    today = datetime.date.today()
    tomorrow = today + datetime.timedelta(days=1)

    optimizer = FlightOptimizer('https://tequila-api.kiwi.com')

    merged_cities = _merge_cities(city_to, cities_to)
    cities = optimizer.price_per_km_cities(city_from, merged_cities, \
                                           today, tomorrow)
    if not cities:
        raise SystemExit('Bad request format')

    city_min_price = optimizer.min_price_per_km(cities)

    click.echo("Best price per km is " +
                str(city_min_price['price_per_km']) + "$ for: " +
                city_from + " - " +city_min_price['name'])

if __name__ == '__main__':
    cli()
