// import {create} from 'zustand';

// interface State {
//     isSideMenuOpen: boolean;

//     openSideMenu: () => void;
//     closeSideMenu: () => void;

// }

// const useUiStore = create<State>()((set) => ({
//     isSideMenuOpen: false,

//     openSideMenu: () => set({isSideMenuOpen: true}),
//     closeSideMenu: () => set({isSideMenuOpen: false}),

// }));

import {create} from 'zustand';

type UiState = {
  isSideMenuOpen: boolean;
  closeSideMenu: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isSideMenuOpen: false,
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
