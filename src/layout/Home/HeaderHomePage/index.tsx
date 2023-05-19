import { NextCircle, PrevCircle } from "@/components/Icon";

interface Prop {
  nextOrPrev: (isNext: boolean, isVideoPB?: boolean) => void;
  title: string;
  isVideoPB?: boolean;
}

function HeaderHomePage({ nextOrPrev, title, isVideoPB }: Prop) {
  return (
    <div className="flex justify-between mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white  sm:mt-[56px] mt-6 font-['Inter']">
        {title}
      </h2>
      <div className="sm:flex hidden gap-2 items-end md:mr-7 mr-4">
        <div
          onClick={() => {
            nextOrPrev(false, isVideoPB);
          }}
        >
          <PrevCircle />
        </div>
        <div
          onClick={() => {
            nextOrPrev(true, isVideoPB);
          }}
        >
          <NextCircle />
        </div>
      </div>
    </div>
  );
}
export default HeaderHomePage;
