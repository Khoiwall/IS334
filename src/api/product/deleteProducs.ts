import requestAPI from "../requestAPI";

async function deleteProducts(URL: string, _id: string[]) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
      method: "DELETE",
      data: {
        _id,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { deleteProducts };
