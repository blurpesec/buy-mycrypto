# buy.mycrypto.com

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

This repository contains the code for the [buy.mycrypto.com](https://buy.mycrypto.com)

## Getting Started

In order for the knowledge base to compile locally, you need to make sure the content is fetched too. To do this, run the following command:

```bash
git submodule update --init --remote --recursive
```

### Development

To start a development server, run the following command

```bash
yarn run start
```

The server will be accessible on `localhost:8000`.

### Production

To build a static version of the buy.mycrypto.com site for production, run the following command

```bash
yarn run build
```

If you want to deploy the buy.mycrypto.com site to Github Pages, you can use the following command instead, which will also build buy.mycrypto.com

```bash
yarn run deploy
```

## License

The Knowledge Base is [MIT licensed](./LICENSE).
