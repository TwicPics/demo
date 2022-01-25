<img align="right" width="25%" src="https://raw.githubusercontent.com/twicpics/components/main/logo.png">

# TwicPics Database for demo projects

This folder contains the server part which exposes the data used by the demo sites


## How it works

### Full fack api
https://github.com/typicode/json-server

### Fake data
https://github.com/marak/Faker.js/


## Configuration

Edit json-server.json to change json-server option
See https://github.com/typicode/json-server#cli-usage

## What does it to ?

Exposes the data (through http get) used in the demonstration sites of the TwicPics components:
- product listing (productListing)
- product categories (productListing)
- list of currencies (frontStore)
- navigation bar (frontStore)
- footer navigation (frontStore)
- list of sections(frontStore)



## Usage

| command | what does it do |
| - | - |
| `yarn generate` | generate json database into ./src/database.json |
| `yarn server` | launch server on port defined in json-server.json |
| `yarn serve` | install dependancies, generate database and then launch server on port defined in json-server.json |


## Routes Example

  http://localhost:3100

  http://localhost:3100/products

  http://localhost:3100/productCategories

  http://localhost:3100/currencies

  http://localhost:3100/navigation

  http://localhost:3100/sections

  http://localhost:3100/footerNavigation

