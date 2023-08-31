// import create from "zustand";
import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware"

export interface CountState {
	value: number,
	increaseBy: (by: number) => void
}

export const useCountStore = create<CountState>()((set) => {
	return {
		value: 0,
		increaseBy: (by) => set((
			pre => ({ value: pre.value + by })
		)),
	}
})