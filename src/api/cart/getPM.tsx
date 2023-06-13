import requestAPI from "../requestAPI";

async function getPM(URL: string, value: number) {
  try {
    const response = await requestAPI({
      url: `${URL}/pm`,
      method: "POST",
      data: {
        value,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getPM };
