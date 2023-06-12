import requestAPI from "../requestAPI";

async function comment(URL: string, _id: string, content: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/${_id}/comments`,
      method: "POST",
      data: {
        content,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { comment };
