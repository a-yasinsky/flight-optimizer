from haversine import haversine

class ComputeDistances(object):

    @staticmethod
    def calculate_distance(_from, _to):
        return haversine(_from, _to)
