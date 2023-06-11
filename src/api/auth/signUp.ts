import requestAPI from "../requestAPI";

async function signUp(
  URL: string,
  userName: string,
  email: string,
  password: string
) {
  try {
    const response = await requestAPI({
      url: `${URL}/signUp`,
      method: "POST",
      data: {
        username: userName,
        email,
        password,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { signUp };
