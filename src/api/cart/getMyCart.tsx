import requestAPI from "../requestAPI";

async function getMyCart(URL: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/user`,
      method: "GET",
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getMyCart };
