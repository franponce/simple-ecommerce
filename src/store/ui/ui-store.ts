/*import {create} from 'zustand';

type UiState = {
  isSideMenuOpen: boolean;
  closeSideMenu: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isSideMenuOpen: false,
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

import { create } from 'zustand';

type UiState = {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void; // Agrega la función toggleSideMenu
};

export const useUiStore = create<UiState>((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })), // Implementa toggleSideMenu
}));*/

import { create } from 'zustand';

type UiState = {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void; // Definir la función toggleSideMenu
};

export const useUiStore = create<UiState>((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })), // Definir la lógica para cambiar el estado
}));