import video from "@/api/video";
import ButtonComponent from "@/components/ButtonComponent";
import ModalNew from "@/components/ModalNew";
import DetailsSection from "@/layout/Management/Studio/Components/VideoDetailModal/DetailsSection";
import PreviewSection from "@/layout/Management/Studio/Components/VideoDetailModal/PreviewSection";
import { useState } from "react";
import Checkout from "./Checkout";
import Sumary from "./Sumary";

function ModalCheckout({ setOpenCheckout }: any) {
  return (
    <ModalNew
      title={"Thanh toán"}
      setIsOpen={setOpenCheckout}
      minHeight={"min-h-[600px]"}
      minWidth="min-w-[800px]"
      maxHeight={"max-h-[600px]"}
      maxWidth="max-w-[800px]"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex">
          <div className="flex-1 flex flex-col overflow-auto max-h-[523px]">
            <Sumary />
          </div>
          <div className="border-r border-solid border-[#303030]  h-[523px]"></div>
          <div className="flex-1 flex items-center justify-center max-h-[523px]">
            <Checkout setOpenCheckout={setOpenCheckout} />
          </div>
        </div>
      </div>
    </ModalNew>
  );
}
export default ModalCheckout;
