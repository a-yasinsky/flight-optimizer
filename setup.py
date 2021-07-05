from setuptools import setup

setup(
    name='flight-optimizer',
    version=1.0,
    packages=['flight_optimizer'],
    install_requires=['click', 'pytest'],
    entry_points={'console_scripts': ['flight-optimizer=flight_optimizer.cli:cli']},
)
