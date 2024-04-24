# k-centipede

[![Latest Release](https://img.shields.io/github/v/tag/kalisio/k-centipede?sort=semver&label=latest)](https://github.com/kalisio/k-centipede/releases)
[![ci](https://github.com/kalisio/k-centipede/actions/workflows/main.yaml/badge.svg)](https://github.com/kalisio/k-centipede/actions/workflows/main.yaml)

A [Krawler](https://kalisio.github.io/krawler/) based service to get the antennas status of the [RTK Centipede Network](https://docs.centipede.fr/)

## Description

The **k-centipede** job allow to scrape antennas status from the [centipede RTK server](https://centipede.fr/). The downloaded data are stored within a [MongoDB](https://www.mongodb.com/) database and more precisely in 2 collections: 
* the `bases` collection stores the data relative to the bases 
* the `pings` collection stores the ping status of each base


All records are stored in [GeoJson](https://fr.wikipedia.org/wiki/GeoJSON) format.

The job is executed according a specific cron expression. By default, every 5 minutes.

## Configuration

| Variable | Description |
|--- | --- |
| `DB_URL` | The mongoDB database URL. The default value is `mongodb://127.0.0.1:27017/centipede` |
| `TTL` | The measurements data time to live. It must be expressed in seconds and the default value is `604 800` (7 days) | 
| `DEBUG` | Enables debug output. Set it to `krawler*` to enable full output. By default it is undefined. |

## Deployment

We personally use [Kargo](https://kalisio.github.io/kargo/) to deploy the service.

## Contributing

Please refer to [contribution section](./CONTRIBUTING.md) for more details.

## Authors

This project is sponsored by 

![Kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)

## License

This project is licensed under the MIT License - see the [license file](./LICENSE) for details