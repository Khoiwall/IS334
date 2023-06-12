import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Textare from "./TextArea";

interface Props {
  sign: {
    title: string;
    isRequire: boolean;
    type: string;
    placeholder: string;
    name: string;
    data?: {
      _id: string;
      title: string;
    }[];
    min?: number;
    max?: number;
  };
  err?: boolean[];
  setErr?: any;
  className: string;
  login?: boolean;
  textSize?: string;
  defaultValue?: string;
  disable?: boolean;
  backGroundInput?: string;
  padding?: string;
}
const PASSWORDMUSTCONST = [
  "Ít nhất có 8 ký tự",
  "Ít nhất có 1 ký tự thường",
  "Ít nhất có 1 ký tự viết hoa",
  "Ít nhất có 1 số",
];

function LayOutInput({
  sign,
  className,
  err,
  setErr,
  login,
  textSize,
  defaultValue,
  disable,
  backGroundInput,
  padding,
}: Props) {
  const [render, setRender] = useState(0);
  const [password, setPassword] = useState(0);
  const checkPassword = (text: string, name?: string) => {
    if (name === "password" && err) {
      setPassword(text?.length);
      setRender(render + 1);
      if (text?.length >= 8) {
        err[0] = true;
        setErr(err);
      } else {
        err[0] = false;
        setErr(err);
      }
      for (var i = 0; i < text?.length; i++) {
        if (/[a-z]/.test(text[i])) {
          err[1] = true;
          setErr(err);
          break;
        } else {
          err[1] = false;
          setErr(err);
        }
      }
      for (var i = 0; i < text?.length; i++) {
        if (/[A-Z]/.test(text[i])) {
          err[2] = true;
          setErr(err);
          break;
        } else {
          err[2] = false;
          setErr(err);
        }
      }
      for (var i = 0; i < text?.length; i++) {
        if (/[0-9]/.test(text[i])) {
          err[3] = true;
          setErr(err);
          break;
        } else {
          err[3] = false;
          setErr(err);
        }
      }
      if (text?.length === 0) {
        setErr([false, false, false, false]);
      }
    }
  };

  useEffect(() => {}, [render]);
  return (
    <div className="w-full sm:block flex mb-4">
      <div className="flex-1 flex flex-col mx-0">
        <label
          htmlFor={sign?.name}
          className={`mb-1.5 ${
            textSize ? textSize : "sm:text-xl text-base"
          } text-start font-bold text-white ${
            sign?.isRequire ? "required" : ""
          }`}
        >
          {sign?.title}
        </label>
        {sign?.type === "textare" ? (
          <Textare
            backGroundInput={backGroundInput}
            sign={sign}
            className={className}
            defaultValue={defaultValue}
          />
        ) : sign?.type === "select" ? (
          <Select
            backGroundInput={backGroundInput}
            sign={sign}
            className={className}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            backGroundInput={backGroundInput}
            sign={sign}
            onChange={checkPassword}
            className={className}
            defaultValue={defaultValue}
            disable={disable}
            padding={padding}
          />
        )}
        {login ? null : sign?.name === "password" && err ? (
          <ul className="list-disc mt-4 px-4 grid sm:grid-cols-2">
            {PASSWORDMUSTCONST.map((condition: string, index: number) => {
              return (
                <li
                  key={index}
                  className={
                    err[index]
                      ? `text-sm mb-1 sm:py-0 py-0.5 text-primary`
                      : `text-sm mb-1 sm:py-0 py-0.5 text-white`
                  }
                >
                  {condition}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default LayOutInput;
