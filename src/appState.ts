import { create } from "zustand"

type State = {
	isUploadFormCollapsed: boolean
	isUploadFormSubmitting: boolean
	previewUrl: string | null
	searchText: string | null
	setSearchText: (text: string | null) => void
	setPreviewUrl: (url: string | null) => void
	setIsUploadFormCollapsed: (bool: boolean) => void
	setIsUploadFormSubmitting: (bool: boolean) => void
}

const useAppState = create<State>(set => ({
	isUploadFormCollapsed: true,
	isUploadFormSubmitting: false,
	previewUrl: null,
	searchText: null,
	setSearchText: (text: string | null) => set({ searchText: text }),
	setPreviewUrl: (url: string | null) => set({ previewUrl: url }),
	setIsUploadFormCollapsed: bool =>
		set(state => ({ ...state, isUploadFormCollapsed: bool })),
	setIsUploadFormSubmitting: bool =>
		set(state => ({ ...state, isUploadFormSubmitting: bool })),
}))

export default useAppState
