import datetime
from flask import Flask, request, abort, jsonify
from flask_cors import CORS
from .flight_optimizer import FlightOptimizer

def create_app(config_object):
    app = Flask(__name__)
    app.config.from_object(config_object)

    CORS(app)

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,DELETE,OPTIONS')
        return response

    @app.route('/', methods=['GET'])
    def health():
        return jsonify("Healthy")

    @app.route('/prices/minimum', methods=['POST'])
    def get_min_price():
        body = request.get_json()

        city_from = body.get('flightFrom', "")
        cities_to = body.get('flightsTo', [])
        print(city_from, cities_to)
        today = datetime.date.today()
        tomorrow = today + datetime.timedelta(days=1)

        optimizer = FlightOptimizer('https://tequila-api.kiwi.com')

        cities = optimizer.price_per_km_cities(city_from, cities_to, \
                                               today, tomorrow)
        if not cities:
            abort(400)

        city_min_price = optimizer.min_price_per_km(cities)

        return jsonify(city_min_price)

    @app.errorhandler(400)
    def not_found(error):
        return jsonify({
            "success": False,
            "erorr": 400,
            "message": "bad request"
            }), 400

    return app
