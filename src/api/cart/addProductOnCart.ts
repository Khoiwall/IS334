import requestAPI from "../requestAPI";

async function addProductOnCart(URL: string, _id: string, quatity: number) {
  try {
    const response = await requestAPI({
      url: `${URL}/products/${_id}`,
      method: "POST",
      data: {
        quatity,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { addProductOnCart };
