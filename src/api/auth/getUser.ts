import requestAPI from "../requestAPI";

async function getUser(URL: string) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { getUser };
