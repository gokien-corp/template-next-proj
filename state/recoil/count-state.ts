import { atom } from "recoil";

export const countState = atom<number>({
	key: "COUNT_STATE",
	default: 0,
});