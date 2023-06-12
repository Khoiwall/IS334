import requestAPI from "../requestAPI";

async function getProducts(URL: string) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
      method: "GET",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getProducts };
