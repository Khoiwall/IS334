interface Prop {
  nextOrPrev: (isNext: boolean) => void;
}

function NextOrPrevComponent({ nextOrPrev }: Prop) {
  return (
    <button
      className="bg-transparent	absolute h-full flex items-center 2xl:right-4 xl:right-10 right-0 pb-20 cursor-pointer"
      onClick={() => {
        nextOrPrev(true);
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="z-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66634 12.3333H16.5597L10.053 18.84C9.53301 19.36 9.53301 20.2133 10.053 20.7333C10.573 21.2533 11.413 21.2533 11.933 20.7333L20.7197 11.9466C21.2397 11.4266 21.2397 10.5866 20.7197 10.0666L11.9463 1.26665C11.4263 0.746648 10.5863 0.746648 10.0663 1.26665C9.54634 1.78665 9.54634 2.62665 10.0663 3.14665L16.5597 9.66665H1.66634C0.933008 9.66665 0.333008 10.2666 0.333008 11C0.333008 11.7333 0.933008 12.3333 1.66634 12.3333Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
export default NextOrPrevComponent;
