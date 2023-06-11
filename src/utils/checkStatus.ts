const checkStatus = (response: any) => {
  if (response && response.status === 200) {
    return true;
  } else {
    return false;
  }
};
export { checkStatus };
