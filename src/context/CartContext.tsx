import { CartAPI } from "@/api";
import { useAppSelector } from "@/hook/reduxHook";
import { User } from "@/interfaces/user";
import { useState, ReactNode, createContext, useEffect } from "react";
import toast from "react-hot-toast";

// import CartAPI from "src/services/api-v1.5/CartAPI";

type CartContext = {
  cart: any;
  addProduct: (product: any, quatity: number) => void;
  removeProduct: (product: any, quatity: number) => void;
  isLoadingCart: boolean;
};

export const CartContext = createContext<CartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  isLoadingCart: false,
});

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const { user } = useAppSelector((state) => state?.authRedux);
  const [cart, setCart] = useState<any>([]);
  const [isLoadingCart, setIsLoadingCart] = useState<boolean>(false);
  const addProduct = async (product: any, quatity: number = 1) => {
    const checkProduct = cart?.filter((_product: any) => {
      return _product?.product_id?._id === product?._id;
    });
    if (checkProduct?.length > 0) {
      setCart((prev: any[]) => {
        return prev?.map((_product) => {
          return _product?.product_id?._id === product?._id
            ? {
                ..._product,
                quatity: _product?.quatity + quatity,
              }
            : _product;
        });
      });
    } else {
      setCart((prev: any[]) => [
        ...prev,
        {
          user_id: user?._id,
          product_id: product,
          quatity: 1,
        },
      ]);
    }
    const response = await CartAPI.addProductOnCart(
      product?._id,
      checkProduct?.length > 0 ? product?.quatity + quatity : 1
    );
    if (response && response?.data?.status === "Success") {
    } else {
      setCart((prev: any[]) => {
        return prev?.filter((_product) => {
          (_product?.product_id as any)?._id !== product?._id;
        });
      });
      toast.error(response?.response?.data?.message);
    }
  };

  const removeProduct = async (product: any, quatity: number = 1) => {
    setCart((prev: any[]) => {
      return prev?.filter((_product) => {
        (_product?.product_id as any)?._id !== product?._id;
      });
    });
    const response = await CartAPI.removeProduct(product?._id);
    if (response && response?.data?.status === "Success") {
    } else {
      setCart((prev: any[]) => [
        ...prev,
        {
          user_id: user?._id,
          product_id: product,
          quatity: 1,
        },
      ]);
      toast.error(response?.response?.data?.message);
    }
  };

  const getCart = async () => {
    const response = await CartAPI.getMyCart();
    if (response && (response?.status === 200 || response?.status === 201)) {
      setCart(response?.data?.data);
    }
    console.log(123);
    setIsLoadingCart(true);
  };

  useEffect(() => {
    if (user?._id) {
      getCart();
    } else {
      setCart([]);
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{ cart, isLoadingCart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
