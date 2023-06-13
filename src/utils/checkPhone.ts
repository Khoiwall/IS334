import { phone } from "phone";

function checkPhone(value: string) {
  const result = phone(value, { country: "VN" });
  console.log(result);
  return result?.isValid;
}
export { checkPhone };
