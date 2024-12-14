import { create } from "zustand";

interface ConfigState {
  cityPanelIsOpen: boolean;
  filterPanelIsOpen: boolean;
  regionModalIsOpen: boolean;
  toggleCityPanel: () => void;
  toggleFilterPanel: () => void;
  closeRegionModal: () => void;
  closeAllPanels: () => void;
}

const useConfigStore = create<ConfigState>((set) => ({
  cityPanelIsOpen: false,
  filterPanelIsOpen: false,
  regionModalIsOpen: true,

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
  closeRegionModal: () => set({ regionModalIsOpen: false }),
  closeAllPanels: () =>
    set({
      cityPanelIsOpen: false,
      filterPanelIsOpen: false,
      regionModalIsOpen: false,
    }),
}));

export default useConfigStore;
