import requestAPI from "../requestAPI";

async function signIn(URL: string, email: string, password: string) {
  try {
    const response = await requestAPI({
      url: `${URL}/signIn`,
      method: "POST",
      data: {
        email,
        password,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { signIn };
