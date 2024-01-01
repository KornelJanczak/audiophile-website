import { create } from "zustand";
import { ICartData, ICartZustand } from "../models/@type-props";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

const updateItems = (
  stateArr: ICartData[],
  item: ICartData,
  options?: object
) => {
  // Find existing item  index
  const existingItemIndex = stateArr.findIndex(
    (existingItem) => existingItem.id === item.id
  );

  let updatedItems;

  //Check if item exist
  if (existingItemIndex !== -1) {
    //Up item
    updatedItems = [...stateArr];
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      ...(options !== undefined
        ? options
        : {
            quantity: item.quantity + updatedItems[existingItemIndex].quantity,
            totalPrice:
              item.price *
              (item.quantity + updatedItems[existingItemIndex].quantity),
          }),
    };

    // Delete item if quantity === 0
    updatedItems =
      updatedItems[existingItemIndex].quantity === 0
        ? updatedItems.filter((product) => item.id !== product.id)
        : updatedItems;
  } else {
    updatedItems = [...stateArr, item];
  }

  // Count total price of cart
  const total = setTotal(updatedItems);

  // Return data
  return { updatedItems, total };
};

const setTotal = (array: ICartData[]) => {
  const total = array.reduce<number>(
    (ac: number, item: ICartData) => ac + item.totalPrice,
    0
  );

  return total;
};

const useCart = create<ICartZustand>()(
  persist(
    (set) => ({
      items: [] as ICartData[],
      shipping: 50,
      total: 0,
      isOpen: false,
      addItem: (item) =>
        set((state) => {
          const { updatedItems, total } = updateItems(state.items, item);
          toast.success("Item has been added to cart!", { duration: 2500 });
          return { items: updatedItems, total };
        }),
      removeItem: (id) =>
        set((state) => {
          const filteredItems = state.items.filter((item) => item.id !== id);
          const total = setTotal(filteredItems);
          return { items: filteredItems, total };
        }),
      removeAll: () =>
        set(() => {
          return { items: [], total: 0 };
        }),
      incItem: (item) =>
        set((state) => {
          const { updatedItems, total } = updateItems(state.items, item, {
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          });

          return { items: updatedItems, total };
        }),
      decIitem: (item) =>
        set((state) => {
          const updateQuantity = item.quantity - 1;
          const { updatedItems, total } = updateItems(state.items, item, {
            quantity: updateQuantity,
            totalPrice: updateQuantity * item.price,
          });
          return { items: updatedItems, total };
        }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart;
