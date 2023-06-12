import requestAPI from "../requestAPI";

async function deleteProduct(URL: string, _id: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { deleteProduct };
