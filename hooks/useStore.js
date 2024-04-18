import { create } from "zustand";

export const useZustandStore = create((set) => ({
  questionNumber: 0,
  increase: (by) =>
    set((state) => ({ questionNumber: state.questionNumber + by })),
  decrease: (by) =>
    set((state) => ({ questionNumber: state.questionNumber - by })),
  loading: false,
  setLoading: (loading) => set(() => ({ loading })), // Update this to set the loading field
  results: [],
  setResults: (results) => set(() => ({ results })),
  showResults: false,
  setShowResults: (showResults) => set(() => ({ showResults })),
}));
