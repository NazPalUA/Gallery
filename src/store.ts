import { create } from "zustand"

type Inputs = {
	title: string | null
	file: File | null
	path: string | null
}

type State = {
	inputs: Inputs
	isUploadFormCollapsed: boolean
	setInputs: (value: React.ChangeEvent<HTMLInputElement>) => void
	setIsUploadFormCollapsed: (bool: boolean) => void
}

const useStore = create<State>(set => ({
	inputs: {
		title: null,
		file: null,
		path: null,
	},
	isUploadFormCollapsed: false,
	setInputs: value =>
		set(state => {
			if (value.target.name === "file") {
				const file = value.target.files?.[0] || null
				if (!file) {
					return state
				}
				const path = URL.createObjectURL(file)
				return {
					...state,
					inputs: {
						...state.inputs,
						file: file,
						path: path,
					},
				}
			} else if (value.target.name === "title") {
				return {
					...state,
					inputs: {
						...state.inputs,
						title: value.target.value,
					},
				}
			}
			return state
		}),
	setIsUploadFormCollapsed: bool =>
		set(state => ({ ...state, isUploadFormCollapsed: bool })),
}))

export default useStore
