import { useSetRecoilState } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";

const PhaseThree = () => {
  const setPhaseValue = useSetRecoilState(PhaseChangeState);

  return (
    <div className="bg-[#F2F2F2] h-screen p-40">
      <div className="w-3/4 text-center flex flex-col">
        <button
          className="rounded-full w-10 h-10 bg-white"
          onClick={() => setPhaseValue("phase1")}
        >
          X
        </button>
        <h1 className="text-5xl font-extrabold">
          Congrats your Quiz is Published!
        </h1>
        <input
          className="my-5 py-3 rounded-lg px-5"
          placeholder="Your link is here"
          value={"adsdhv"}
        ></input>
        <button className="bg-green-600 text-white mx-40 py-2 rounded-lg my-5">
          Share
        </button>
      </div>
    </div>
  );
};

export default PhaseThree;
