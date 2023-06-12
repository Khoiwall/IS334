import requestAPI from "../requestAPI";

async function removeProduct(URL: string, _id: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/products/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { removeProduct };
