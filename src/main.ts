import { CityData, DataKeys, RawCityData } from "./types.ts";

export default class NotAllTheCities {
	#SEED?: RawCityData;

	constructor() {}

	/**
	 * Loads the cities data for the given seed
	 * @param {string} seed - "10k" or "1k" - defaults to "10k"
	 * @returns Promise<boolean>
	 */
	async loadCities(seed: "10k" | "1k" = "10k"): Promise<boolean> {
		try {
			const dataModule: { default: RawCityData } = await import(`./data/${seed}.ts`);
			this.#SEED = dataModule.default;
			return true;
		} catch (error) {
			return false;
		}
	}

	#ensureDataLoaded(): boolean {
		if (!this.#SEED) {
			if (process.env.NODE_ENV === "development") {
				throw new Error("Cities data not loaded. Call loadCities() first.");
			} else {
				console.error("Cities data not loaded. Call loadCities() first.");
				return false;
			}
		}
		return true;
	}

	/**
	 * Returns all cities
	 * @returns {RawCityData}
	 */
	getAll(): RawCityData {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		return this.#SEED;
	}

	/**
	 * Returns all cities as objects with keys
	 * @returns {CityData[]}
	 */
	getAllWithKeys(): CityData[] {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		return this.#SEED.map((city) => {
			return this.#cityAsObject(city);
		});
	}

	/**
	 * Returns all cities as objects with custom keys
	 * @param {DataKeys[]} keys
	 * @returns {CityData[]}
	 */
	getAllWithCustomKeys(keys: DataKeys[]): CityData[] {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		return this.#SEED.map((city) => {
			return this.#cityAsObjectCustomKeys(city, keys);
		});
	}

	/**
	 * Returns all cities over a certain population
	 * @param {number} population
	 * @returns {RawCityData}
	 */
	getOver(population: number): RawCityData {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		return this.#SEED.filter((city) => parseInt(city[6]) >= population);
	}

	/**
	 * Returns all cities over a certain population as objects with keys
	 * @param {number} population
	 * @returns {CityData[]}
	 */
	getOverWithKeys(population: number): CityData[] {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		const filtered = this.#SEED.filter((city) => parseInt(city[6]) >= population);
		return filtered?.map((city) => {
			return this.#cityAsObject(city);
		});
	}

	/**
	 * Returns all cities over a certain population as objects with custom keys
	 * @param {number} population
	 * @param {DataKeys[]} keys
	 * @returns {CityData[]}
	 */
	getOverWithCustomKeys(population: number, keys: DataKeys[]): CityData[] {
		if (this.#ensureDataLoaded() === false || this.#SEED === undefined) {
			return [];
		}
		const filtered = this.#SEED.filter((city) => parseInt(city[6]) >= population);
		return filtered?.map((city) => {
			return this.#cityAsObjectCustomKeys(city, keys);
		});
	}

	#cityAsObject(city: string[]): CityData {
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

	#cityAsObjectCustomKeys(city: string[], keys: DataKeys[]) {
		let data: CityData = {};
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

