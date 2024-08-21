import { create } from "zustand";

const useStore = create((set) => ({
    urlInputVal: "",
    setUrlInputVal: (newVal) => set(() => ({urlInputVal: newVal})),
    error: false,
    setError: (newErr) => set(() => ({error: newErr})),
    errorText: "",
    setErrorText: (newText) => set(() => ({errorText: newText})),
    urlSearched: [],
    setUrlSearched: (newSearch) => set((state) => ({urlSearched: [...state.urlSearched, newSearch]}))
}));

export default useStore;