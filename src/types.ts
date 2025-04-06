export interface CityData {
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

export type DataKeys = "name" | "local" | "lat" | "lng" | "code" | "region" | "population" | "elevation" | "continent";
export type RawCityData = string[][];
