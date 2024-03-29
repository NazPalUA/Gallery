import { create } from "zustand"

type State = {
	isUploadFormCollapsed: boolean
	previewUrl: string | null
	fileName: string | null
	setFileName: (name: string | null) => void
	setPreviewUrl: (url: string | null) => void
	setIsUploadFormCollapsed: (bool: boolean) => void
}

const useAppState = create<State>(set => ({
	isUploadFormCollapsed: false,
	previewUrl: null,
	setPreviewUrl: (url: string | null) => set({ previewUrl: url }),
	fileName: null,
	setFileName: (name: string | null) => set({ fileName: name }),
	setIsUploadFormCollapsed: bool =>
		set(state => ({ ...state, isUploadFormCollapsed: bool })),
}))

export default useAppState
