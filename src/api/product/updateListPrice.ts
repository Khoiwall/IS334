import requestAPI from "../requestAPI";

async function updateDiscount(URL: string, _id: string, discount: number) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}/discount`,
      method: "PUT",
      data: {
        discount,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { updateDiscount };
