import { useState, ReactNode, createContext, useEffect } from "react";
import toast from "react-hot-toast";

type SignContext = {
  title: string;
  isOpen: boolean;
  openModalSign: (title: string) => void;
  closeModalSign: () => void;
};

export const SignContext = createContext<SignContext>({
  title: "",
  isOpen: false,
  openModalSign: () => {},
  closeModalSign: () => {},
});

type Props = {
  children: ReactNode;
};

export function SignUseContext({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModalSign = (title: string) => {
    setTitle(title);
    setIsOpen(true);
  };
  const closeModalSign = () => {
    setTitle("");
    setIsOpen(false);
  };

  return (
    <SignContext.Provider
      value={{ title, isOpen, openModalSign, closeModalSign }}
    >
      {children}
    </SignContext.Provider>
  );
}
