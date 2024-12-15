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
    longitude: -122.9196,
    latitude: 49.2144,
    zoom: 10,
  },
  setCityObj: (value) => {
    set({ cityObj: value });
  },
}));

export default useCityStore;
