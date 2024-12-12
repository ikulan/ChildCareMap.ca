import { create } from "zustand";

interface ConfigState {
  cityPanelIsOpen: boolean;
  filterPanelIsOpen: boolean;
  toggleCityPanel: () => void;
  toggleFilterPanel: () => void;
  closeAllPanels: () => void;
}

const useConfigStore = create<ConfigState>((set) => ({
  cityPanelIsOpen: false,
  filterPanelIsOpen: false,

  toggleCityPanel: () =>
    set((state) => ({
      cityPanelIsOpen: !state.cityPanelIsOpen,
      filterPanelIsOpen: false,
    })),
  toggleFilterPanel: () =>
    set((state) => ({
      filterPanelIsOpen: !state.filterPanelIsOpen,
      cityPanelIsOpen: false,
    })),
  closeAllPanels: () =>
    set({ cityPanelIsOpen: false, filterPanelIsOpen: false }),
}));

export default useConfigStore;
