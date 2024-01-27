import { atom } from "recoil";
const userId = atom({
  key: "UserId",
  default: "",
});
export default userId;
