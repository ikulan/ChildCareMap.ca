import { create } from "zustand";
import { CityInfo } from "../types/interfaces";

interface CityState {
  cityObj: CityInfo;
  setCityObj: (value: CityInfo) => void;
}

const useCityStore = create<CityState>((set) => ({
  cityObj: {
    handle: "metro_van",
    name: "Metro Vancouver",
    longitude: -123.138573,
    latitude: 49.263569,
    zoom: 12,
  },
  setCityObj: (value) => {
    set({ cityObj: value });
  },
}));

export default useCityStore;
