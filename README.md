# Not All The Cities

> ## Over 10000 Population
>
> **31793 Cities**

> ## Over 1000 Population
>
> **111211 Cities**

## Usage

```js
const NotAllTheCities = require("not-all-the-cities");

const NATC = new NotAllTheCities("10k");

let CITIES = NATC.getOverWithCustomKeys(5000000, ["name", "lat", "lng"]);

console.log(CITIES[0]);
```

```json
{
	"name": "Buenos Aires",
	"lat": -34.61315,
	"lng": -58.37723
}
```

### More Documentation pending...

---

All the data used to create this library comes from [GeoNames.org](https://www.geonames.org/)

_The data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness._

