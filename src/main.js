const K10 = require("./data/10k.json");
const K1 = require("./data/1k.json");

class NotAllTheCities {

	#seed;

	constructor(seed = "10k") {
		seed === "1k" ? this.#seed = K1 : this.#seed = K10;
	}

	getAll() {
		return this.#seed;
	}

	getAllWithKeys() {
		return this.#seed.map((city) => {
			return this.cityAsObject(city);
		});
	}

	getAllWithCustomKeys(keys) {
		return this.#seed.map((city) => {
			return this.cityAsObjectCustomKeys(city, keys);
		});
	}

	getOver(population) {
		return this.#seed.filter((city) => city[7] >= population);
	}

	getOverWithKeys(population) {
		const filtered = this.#seed.filter((city) => city[7] >= population);
		return filtered.map((city) => {
			return this.cityAsObject(city);
		});
	}

	getOverWithCutomKeys(population, keys) {
		const filtered = this.#seed.filter((city) => city[7] >= population);
		return filtered.map((city) => {
			return this.cityAsObjectCustomKeys(city, keys);
		});
	}

	cityAsObject(city) {
		return {
			"name": city[0],
			"local": city[1],
			"lat": parseFloat(city[2]),
			"lng": parseFloat(city[3]),
			"code": city[4],
			"altcode": city[5],
			"region": city[6],
			"population": parseInt(city[7]),
			"elevation": parseInt(city[8]),
			"continent": city[9]
		}
	}

	cityAsObjectCustomKeys(city, keys) {
		let data = {};
		if (keys.includes("name")) {
			data.name = city[0];
		}
		if (keys.includes("local")) {
			data.local = city[1];
		}
		if (keys.includes("lat")) {
			data.lat = parseFloat(city[2]);
		}
		if (keys.includes("lng")) {
			data.lng = parseFloat(city[3]);
		}
		if (keys.includes("code")) {
			data.code = city[4];
		}
		if (keys.includes("altcode")) {
			data.altcode = city[5];
		}
		if (keys.includes("region")) {
			data.region = city[6];
		}
		if (keys.includes("population")) {
			data.population = parseInt(city[7]);
		}
		if (keys.includes("elevation")) {
			data.elevation = parseInt(city[8]);
		}
		if (keys.includes("continent")) {
			data.continent = city[9];
		}
		return data;
	}
}

module.exports = NotAllTheCities;

