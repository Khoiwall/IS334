import requestAPI from "../requestAPI";

async function getProduct(URL: string, _id: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}`,
      method: "GET",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getProduct };
