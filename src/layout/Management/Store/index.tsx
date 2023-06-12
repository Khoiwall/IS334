import { useEffect, useState, useRef } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import TabSection from "@/components/TabSection";
import AddProductModal from "./Components/AddProductModal/index";
import { useAppSelector } from "@/hook/reduxHook";
import NoLogin from "@/components/NoLogin";
import Table from "./Components/Table";
// import ProductAPI from "src/services/api-v1.5/ProductAPI";
// import { ProductRye } from "src/app/types";
import Action from "./Components/Action";

// import { Filter as FilterType } from "src/app/types/Filter";
import { IconPlus } from "@/components/Icon/Generate";
import { ProductAPI } from "@/api";

export default function Store() {
  const tabs = ["Sản phẩm"];
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [products, setProducts] = useState<any[]>([]);
  const [isShowAddProductModal, setIsShowAddProductModal] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.authRedux);
  const [searchText, setSearchText] = useState<string>("");
  const onAddProduct = (isLive?: boolean) => {
    setIsShowAddProductModal(true);
  };
  const oneRequest = useRef(false);

  async function asyncFunc() {
    const response = await ProductAPI.getProducts();
    if (response && (response?.status === 200 || response?.status === 201)) {
      setProducts(response.data?.data ?? []);
    }
    setIsLoading(true);
  }

  useEffect(() => {
    if (user) {
      if (oneRequest?.current === false) {
        oneRequest.current = true;
        asyncFunc();
      }
    }
  }, [user]);

  if (!user) return <NoLogin text={""} />;
  return (
    <div className="font-['Inter'] text-white pt-[72px] flex flex-col min-h-screen">
      {isShowAddProductModal && (
        <AddProductModal
          setItems={setProducts}
          setIsOpen={setIsShowAddProductModal}
        />
      )}
      <div className="flex items-center overflow-auto px-10">
        <h1 className="font-['Poppins'] text-20 font-bold flex-1">Kho</h1>
        <div className="flex gap-4">
          <ButtonComponent
            padding="py-[15px] px-5"
            onClick={onAddProduct}
            icon
            infoIcon={{ width: "16", height: "16" }}
            Icon={IconPlus}
            title="Thêm sản phẩm"
            classNameText="pl-[10px] font-semibold"
            className=" hover:bg-[#27B12E] bg-primary text-[#252026] rounded-[8px]"
          />
        </div>
      </div>
      <TabSection
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabs={tabs}
        gap="gap-10"
        paddingX="px-10"
      />
      <Action
        items={products}
        setItems={setProducts}
        setSearchText={setSearchText}
      />
      <Table
        searchText={searchText}
        items={products}
        setItems={setProducts}
        onAddProduct={onAddProduct}
        isLoading={isLoading}
      />

      {/* {isFilterOpen && (
        <Filter
          setFilters={setFilters}
          filters={filters}
          setIsOpen={setIsFilterOpen}
        />
      )} */}
    </div>
  );
}
