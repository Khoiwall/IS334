import requestAPI from "../requestAPI";

async function getVideosHaveProduct(URL: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/products`,
      method: "GET",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getVideosHaveProduct };
