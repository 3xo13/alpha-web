import { create } from "zustand";

const useBasketData = create((set) => ({
    Basket: [],
    itemsQuantity: 0,
    setBasket: (Basket) => set((state) => ({ Basket })),
    addItem: (item) => set((state) => ({ Basket: [...state.Basket, item] })),
    removeItem: (name) => set((state) => ({ Basket: state.Basket.filter((item) => item.name != name) })),
    increaseQuantity: () => set((state) => ({ itemsQuantity: state.itemsQuantity + 1 })),
    decreaseQuantity: () => set((state) => ({ itemsQuantity: state.itemsQuantity - 1 })),
    clearBasket: () => set((state) => ({ Basket: [] })),
    clearQuantity: () => set((state) => ({ itemsQuantity: 0 })),
    setPruductQuantity: (name, quantity) => set((state) => ({ Basket: state.Basket.map((item) => item.name == name ? { ...item, quantity: quantity } : item) })),
}));

export default useBasketData;