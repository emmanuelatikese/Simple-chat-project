import { create } from "zustand";

const useConvStore = create((set) => ({
    selectConv: null,
    setConv: (selectConv) => set({ selectConv }),
    Messages: [],
    setMessages: (Messages) => set({ Messages })
}));

export default useConvStore;
