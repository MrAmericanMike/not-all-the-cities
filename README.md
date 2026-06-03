# Not All The Cities

## Over 10000 Population

**31793 Cities**

## Over 1000 Population

**111211 Cities**

## Installation

```sh
npm install not-all-the-cities
```

## Usage

```js
import NotAllTheCities from "not-all-the-cities";

const NATC10K = await NotAllTheCities.create("10k");

const CITIES = NATC10K.getOverWithCustomKeys(5000000, ["name", "lat", "lng"]);

console.log(CITIES[0]);
```

```json
{
	"name": "Buenos Aires",
	"lat": -34.61315,
	"lng": -58.37723
}
```

## Available Methods

### `getAll()`

Returns the raw city data.

```js
const allCities = NATC10K.getAll();
```

### `getAllWithKeys()`

Returns all cities as objects.

```js
const allCities = NATC10K.getAllWithKeys();

console.log(allCities[0]);
```

Example output:

```json
{
	"name": "Buenos Aires",
	"local": "Buenos Aires",
	"lat": -34.61315,
	"lng": -58.37723,
	"code": "AR",
	"region": "07",
	"population": 13076300,
	"elevation": 31,
	"continent": "SA"
}
```

### `getAllWithCustomKeys(keys)`

Returns all cities as objects containing only the requested properties.

```js
const allCities = NATC10K.getAllWithCustomKeys(["name", "lat", "lng"]);
```

---

### `getOver(population)`

Returns all cities with a population greater than or equal to the specified value.

```js
const citiesOver5M = NATC10K.getOver(5000000);
```

---

### `getOverWithKeys(population)`

Returns matching cities as objects.

```js
const citiesOver5M = NATC10K.getOverWithKeys(5000000);
```

---

### `getOverWithCustomKeys(population, keys)`

Returns matching cities with only the requested properties.

```js
const citiesOver5M = NATC10K.getOverWithCustomKeys(5000000, ["name", "lat", "lng"]);
```

---

## Available Keys

```ts
["name", "local", "lat", "lng", "code", "region", "population", "elevation", "continent"];
```

---

## Notes

Datasets are loaded lazily and only when requested via:

```js
await NotAllTheCities.create("1k");
```

or

```js
await NotAllTheCities.create("10k");
```

This keeps the initial package load small and avoids loading the full dataset unless it is needed.

---

## Data Source

All the data used to create this library comes from [GeoNames.org](https://www.geonames.org/)

_The data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness._

