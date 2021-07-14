from flask import Flask, request, abort, jsonify

def create_app(config_object):
    app = Flask(__name__)
    app.config.from_object(config_object)

    @app.route('/', methods=['GET'])
    def health():
        return jsonify("Healthy")

    return app
