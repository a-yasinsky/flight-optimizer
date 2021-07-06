import click

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

if __name__ == '__main__':
    cli()
