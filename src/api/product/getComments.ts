import requestAPI from "../requestAPI";

async function getComments(URL: string, _id: string, length: number) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}/comments`,
      method: "GET",
      params: {
        length,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getComments };
