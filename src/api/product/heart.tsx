import requestAPI from "../requestAPI";

async function heart(URL: string, _id: string, isLike: boolean) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}/heart`,
      method: "PUT",
      data: {
        isLike,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { heart };
