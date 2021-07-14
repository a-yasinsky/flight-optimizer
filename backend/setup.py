import setuptools

setuptools.setup(
    name='flight-optimizer',
    version=1.0,
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    install_requires=['click', 'Flask'],
    entry_points={'console_scripts': ['flight-optimizer=flight_optimizer.cli:cli']},
)
