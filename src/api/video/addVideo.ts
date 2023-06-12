import requestAPI from "../requestAPI";

async function addVideo(URL: string, option: any) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
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
export { addVideo };
