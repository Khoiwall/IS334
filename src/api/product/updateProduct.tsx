import requestAPI from "../requestAPI";

async function updateProduct(
  URL: string,
  _id: string,
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
      url: `${URL}/${_id}`,
      method: "PUT",
      data: {
        ...option,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { updateProduct };
