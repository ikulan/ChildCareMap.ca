import { create } from "zustand";
import { CityInfo } from "../types/interfaces";

interface CityState {
  cityObj: CityInfo;
  setCityObj: (value: CityInfo) => void;
}

const useCityStore = create<CityState>((set) => ({
  cityObj: {
    handle: "port_coquitlam",
    name: "Port Coquitlam",
    longitude: -122.75106,
    latitude: 49.269857,
    zoom: 13.5,
  },
  setCityObj: (value) => {
    set({ cityObj: value });
  },
}));

export default useCityStore;
