// services/store/reportedDates.ts
import { atom } from "recoil";

export const reportedDatesState = atom<string[]>({
  key: "reportedDatesState",
  default: [],
});
