import { Cities, ServiceTypes } from "./enums";

export type Coordinate = {
  longitude: number;
  latitude: number;
};

export type DaycareInfo = {
  id: string;
  name: string;
  address: string;
  city: Cities;
  phone: string;
  services: ServiceTypes[];
};

export type Location = {
  position: Coordinate;
  info: DaycareInfo;
};

export type CityInfo = {
  handle: string;
  name: string;
  longitude: number;
  latitude: number;
  zoom: number;
};
