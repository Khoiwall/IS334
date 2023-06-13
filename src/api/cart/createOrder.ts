import requestAPI from "../requestAPI";

async function createOrder(URL: string, option: any) {
  try {
    const response = await requestAPI({
      url: `${URL}/create-order`,
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
export { createOrder };
