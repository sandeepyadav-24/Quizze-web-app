import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import PhaseChangeState from "../Atom/PhaseChangeState";
import LinkPhase from "../Atom/LinkPhase";

import { toast } from "react-toastify";

const PhaseThree = () => {
  // Recoil for Seytting Phase Value
  const setPhaseValue = useSetRecoilState(PhaseChangeState);

  // Link Which Get from Atom
  const link = useRecoilValue(LinkPhase);
  console.log(link);
  // Function to Handle To COpy To Clipboard
  const handleCopyToClipboard = async () => {
    // Function to Copy Link To Clipboard
    await navigator.clipboard.writeText(link);
    console.log("Toast");
    // Alert Message
    toast.success("Link copied to ClipBoard", {
      position: "top-right",
      autoClose: 2000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
    });
  };

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
          value={link}
          readOnly
        ></input>
        <button
          className="bg-green-600 text-white mx-40 py-2 rounded-lg my-5"
          onClick={handleCopyToClipboard}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default PhaseThree;
