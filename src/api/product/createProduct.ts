import requestAPI from "../requestAPI";

async function createProduct(
  URL: string,
  option: {
    name: string;
    bio: string;
    images: string[];
    price: number;
    discount: number;
  }
) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
      method: "POST",
      data: {
        ...option,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { createProduct };
