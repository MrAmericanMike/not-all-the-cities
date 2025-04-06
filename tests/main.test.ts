import { describe, expect, it } from "vitest";
import NotAllTheCities from "../src/main";

const NATC_10K = new NotAllTheCities();
await NATC_10K.loadCities("10k");
const NATC_1K = new NotAllTheCities();
await NATC_1K.loadCities("1k");

describe("NotAllTheCities 10K Tests", () => {
	it("getAll should return correct information", () => {
		const ALL = NATC_10K.getAll();
		expect(ALL!.length).toBe(31793);
		expect(ALL![0][0]).toBe("les Escaldes");
	});
	it("getAllWithKeys should return correct information", () => {
		const ALL = NATC_10K.getAllWithKeys();
		expect(ALL!.length).toBe(31793);
		expect(ALL![0].name).toBe("les Escaldes");
	});
	it("getAllWithCustomKeys should return correct information", () => {
		const ALL = NATC_10K.getAllWithCustomKeys(["name", "lat", "lng"]);
		expect(ALL!.length).toBe(31793);
		expect(ALL![0].name).toBe("les Escaldes");
		expect(ALL![0].lat).toBe(42.50729);
		expect(ALL![0].lng).toBe(1.53414);
	});
	it("getOver should return correct information", () => {
		const ALL = NATC_10K.getOver(5000000);
		expect(ALL!.length).toBe(46);
		expect(ALL![0][0]).toBe("Buenos Aires");
	});
	it("getOverWithKeys should return correct information", () => {
		const ALL = NATC_10K.getOverWithKeys(5000000);
		expect(ALL!.length).toBe(46);
		expect(ALL![0].name).toBe("Buenos Aires");
	});
	it("getOverWithCustomKeys should return correct information", () => {
		const ALL = NATC_10K.getOverWithCustomKeys(5000000, ["name", "lat", "lng", "local", "code", "continent", "elevation", "region", "population"]);
		expect(ALL!.length).toBe(46);
		expect(ALL![0].name).toBe("Buenos Aires");
		expect(ALL![0].lat).toBe(-34.61315);
		expect(ALL![0].lng).toBe(-58.37723);
	});
});

describe("NotAllTheCities 1K Tests", () => {
	it("getAll should return correct information", () => {
		const ALL = NATC_1K.getAll();
		expect(ALL!.length).toBe(111211);
		expect(ALL![0][0]).toBe("El Tarter");
	});
	it("getAllWithKeys should return correct information", () => {
		const ALL = NATC_1K.getAllWithKeys();
		expect(ALL!.length).toBe(111211);
		expect(ALL![0].name).toBe("El Tarter");
	});
	it("getAllWithCustomKeys should return correct information", () => {
		const ALL = NATC_1K.getAllWithCustomKeys(["name", "lat", "lng"]);
		expect(ALL!.length).toBe(111211);
		expect(ALL![0].name).toBe("El Tarter");
		expect(ALL![0].lat).toBe(42.57952);
		expect(ALL![0].lng).toBe(1.65362);
	});
	it("getOver should return correct information", () => {
		const ALL = NATC_1K.getOver(5000000);
		expect(ALL!.length).toBe(46);
		expect(ALL![0][0]).toBe("Buenos Aires");
	});
	it("getOverWithKeys should return correct information", () => {
		const ALL = NATC_1K.getOverWithKeys(5000000);
		expect(ALL!.length).toBe(46);
		expect(ALL![0].name).toBe("Buenos Aires");
	});
	it("getOverWithCustomKeys should return correct information", () => {
		const ALL = NATC_1K.getOverWithCustomKeys(5000000, ["name", "lat", "lng", "local", "code", "continent", "elevation", "region", "population"]);
		expect(ALL!.length).toBe(46);
		expect(ALL![0].name).toBe("Buenos Aires");
		expect(ALL![0].lat).toBe(-34.61315);
		expect(ALL![0].lng).toBe(-58.37723);
	});
});
