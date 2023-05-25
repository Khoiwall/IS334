interface Props {
  className: string;
  sign: {
    title: string;
    isRequire: boolean;
    type: string;
    placeholder: string;
    name: string;
  };
  defaultValue?: string;
  backGroundInput?: string;
}

function Textare({ className, sign, defaultValue, backGroundInput }: Props) {
  const { name, placeholder, type, isRequire } = sign;

  return (
    <div
      className={`${
        backGroundInput ? backGroundInput : "bg-[#1B161E]"
      } py-4 px-5 rounded-xl`}
    >
      <textarea
        placeholder={placeholder}
        className={className}
        id={name}
        name={name}
        required={isRequire}
        defaultValue={defaultValue}
        rows={4}
      />
    </div>
  );
}
export default Textare;
