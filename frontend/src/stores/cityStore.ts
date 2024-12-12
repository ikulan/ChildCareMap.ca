import { create } from "zustand";
import { CityInfo } from "../types/interfaces";

interface CityState {
  cityObj: CityInfo;
  setCityObj: (value: CityInfo) => void;
}

const useCityStore = create<CityState>((set) => ({
  cityObj: {
    handle: "coquitlam",
    name: "Coquitlam",
    longitude: -122.79413,
    latitude: 49.27962,
    zoom: 12,
  },
  setCityObj: (value) => {
    set({ cityObj: value });
  },
}));

export default useCityStore;
