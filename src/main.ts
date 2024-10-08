import K10 from "./data/10k.ts";
import K1 from "./data/1k.ts";

interface city {
	name?: string;
	local?: string;
	lat?: number;
	lng?: number;
	code?: string;
	region?: string;
	population?: number;
	elevation?: number;
	continent?: string;
}

type keys = "name" | "local" | "lat" | "lng" | "code" | "region" | "population" | "elevation" | "continent";

class NotAllTheCities {
	#SEED: string[][];

	constructor(seed: "10k" | "1k" = "10k") {
		seed === "1k" ? (this.#SEED = K1) : (this.#SEED = K10);
	}

	getAll() {
		return this.#SEED;
	}

	getAllWithKeys() {
		return this.#SEED.map((city) => {
			return this.#cityAsObject(city);
		});
	}

	getAllWithCustomKeys(keys: keys[]) {
		return this.#SEED.map((city) => {
			return this.#cityAsObjectCustomKeys(city, keys);
		});
	}

	getOver(population: number) {
		return this.#SEED.filter((city) => parseInt(city[6]) >= population);
	}

	getOverWithKeys(population: number) {
		const filtered = this.#SEED.filter((city) => parseInt(city[6]) >= population);
		return filtered.map((city) => {
			return this.#cityAsObject(city);
		});
	}

	getOverWithCustomKeys(population: number, keys: keys[]) {
		const filtered = this.#SEED.filter((city) => parseInt(city[6]) >= population);
		return filtered.map((city) => {
			return this.#cityAsObjectCustomKeys(city, keys);
		});
	}

	#cityAsObject(city: string[]): city {
		return {
			"name": city[0],
			"local": city[1],
			"lat": parseFloat(city[2].toString()),
			"lng": parseFloat(city[3].toString()),
			"code": city[4],
			"region": city[5],
			"population": parseInt(city[6].toString()),
			"elevation": parseInt(city[7].toString()),
			"continent": city[8]
		};
	}

	#cityAsObjectCustomKeys(city: string[], keys: keys[]) {
		let data: city = {};
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
		if (keys.includes("region")) {
			data.region = city[5];
		}
		if (keys.includes("population")) {
			data.population = parseInt(city[6]);
		}
		if (keys.includes("elevation")) {
			data.elevation = parseInt(city[7]);
		}
		if (keys.includes("continent")) {
			data.continent = city[8];
		}
		return data;
	}
}

export default NotAllTheCities;

