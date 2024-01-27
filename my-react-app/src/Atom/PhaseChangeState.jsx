import { atom } from "recoil";
const PhaseChangeState = atom({
  key: "PhaseChange",
  default: "phase1",
});
export default PhaseChangeState;
