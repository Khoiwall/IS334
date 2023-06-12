export default function Sort({ displayProducts, setDisplayProducts }: any) {
  return (
    <div className="flex gap-2 py-2 px-6">
      <div>Sắp xếp theo: </div>
      <input
        type="radio"
        id="az"
        name="a"
        value="az"
        onClick={() => {
          const tmpArr = [
            ...displayProducts.sort((a: any, b: any) =>
              a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
            ),
          ];
          console.log(displayProducts);
          setDisplayProducts(tmpArr);
        }}
      />
      <label htmlFor="az">A → Z</label>
      <input
        type="radio"
        id="za"
        name="a"
        value="za"
        onClick={() => {
          const tmpArr = [
            ...displayProducts.sort((a: any, b: any) =>
              a.title !== b.title ? (a.title > b.title ? -1 : 1) : 0
            ),
          ];
          console.log(displayProducts);
          setDisplayProducts(tmpArr);
        }}
      />
      <label htmlFor="za">Z → A</label>
      <input
        type="radio"
        id="asc"
        name="a"
        value="asc"
        onClick={() => {
          const tmpArr = [
            ...displayProducts.sort((a: any, b: any) =>
              a.price !== b.price ? (a.price < b.price ? -1 : 1) : 0
            ),
          ];
          console.log(displayProducts);
          setDisplayProducts(tmpArr);
        }}
      />
      <label htmlFor="asc">Giá tăng dần</label>
      <input
        type="radio"
        id="desc"
        name="a"
        value="desc"
        onClick={() => {
          const tmpArr = [
            ...displayProducts.sort((a: any, b: any) =>
              a.price !== b.price ? (a.price > b.price ? -1 : 1) : 0
            ),
          ];
          console.log(displayProducts);
          setDisplayProducts(tmpArr);
        }}
      />
      <label htmlFor="desc"> Giá giảm dần</label>
    </div>
  );
}
