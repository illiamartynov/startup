// src/store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Plan {
  name: string;
  features: string[];
  price: number;
}

interface PlansState {
  plans: Plan[];
  selectedPlan: string;
}

const initialState: PlansState = {
  plans: [
    { name: 'Economy', features: ['Tworzenie projektu', 'Dostęp do inspiracji', 'Wsparcie'], price: 0 },
    { name: 'Comfort', features: ['Tworzenie projektu', 'Dostęp do inspiracji', 'Wsparcie', 'Generowanie statystyk'], price: 200 },
    { name: 'Premium', features: ['Tworzenie projektu', 'Dostęp do inspiracji', 'Wsparcie', 'Generowanie statystyk', 'Wysyłanie kompletnej oferty do klienta'], price: 400 },
  ],
  selectedPlan: 'Comfort',
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    selectPlan(state, action: PayloadAction<string>) {
      state.selectedPlan = action.payload;
      state.plans.sort((a, b) => (a.name === action.payload ? -1 : b.name === action.payload ? 1 : 0));
    },
  },
});

export const { selectPlan } = plansSlice.actions;

const store = configureStore({
  reducer: {
    plans: plansSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
