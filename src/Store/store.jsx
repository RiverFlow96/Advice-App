import { create } from 'zustand'

const useStore = create((set) => ({
    advice: 1,
    incrementAdvice: () => {
        set((state) => ({
            advice: state.advice + 1
        }))
    }
}))

export default useStore