function NextCircle() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-50 hover:opacity-100 cursor-pointer md:w-9 md:h-9 w-7 h-7"
    >
      <path
        d="M4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36C11.18 36 4 28.82 4 20ZM0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0C8.96 0 0 8.96 0 20ZM20 18H14C12.9 18 12 18.9 12 20C12 21.1 12.9 22 14 22H20V25.58C20 26.48 21.08 26.92 21.7 26.28L27.28 20.7C27.68 20.3 27.68 19.68 27.28 19.28L21.7 13.7C21.08 13.08 20 13.52 20 14.42V18Z"
        fill="white"
      />
    </svg>
  );
}
function PrevCircle() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-50 hover:opacity-100 cursor-pointer md:w-9 md:h-9 w-7 h-7"
    >
      <path
        d="M36 20C36 28.82 28.82 36 20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20ZM40 20C40 8.96 31.04 0 20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20ZM20 22H26C27.1 22 28 21.1 28 20C28 18.9 27.1 18 26 18H20V14.42C20 13.52 18.92 13.08 18.3 13.72L12.72 19.3C12.32 19.7 12.32 20.32 12.72 20.72L18.3 26.3C18.92 26.92 20 26.48 20 25.58V22Z"
        fill="white"
      />
    </svg>
  );
}
export { PrevCircle, NextCircle };
