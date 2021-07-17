# Flight Optimization app

This is an CLI, API and web application around Kiwi.com API to find best price per kilometer.

## Installing CLI

Navigate to `backend` folder and run:

```bash
pip install --editable .
```
  --editable option upgrades package on code change

### Key Dependencies

- [Flask](http://flask.pocoo.org/)  is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#) is the extension we'll use to handle cross origin requests from our frontend server.

- [Click](https://click.palletsprojects.com/en/8.0.x/) is an extension that handles SQLAlchemy database migrations for Flask applications using Alembic.

## Running the CLI

To run and test the CLI, execute:

```bash
flight-optimizer --from <city> --to <city> [<city> ...]
```
where:
  --from specifies the departure city
  --to specifies a list of potential destination cities

## Running web app

To run web server, execute:
```bash
python3 webapp.py
```

### Endpoints
### POST '/prices/minimum'
- Fetches an object for city with minimum price
- Request Arguments: flightFrom, flightsTo
- Returns: An city object.
```
{
  'id': 'london_gb',
  'name': 'London',
  'location': {'lon': -0.127758, 'lat': 51.507351},
  'distance': 931.5659317961586,
  'price': 44,
  'price_per_km': 0.05
}
```

## Running the frontend
1. Navigate to `backend` folder
2. Install node dependencies:
```bash
npm install
```
to upgrade the code:
```bash
npm run build
```
3. Open a browser window and navigate to the index.html file
