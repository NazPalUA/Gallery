import { create } from "zustand"

type State = {
	isUploadFormCollapsed: boolean
	previewUrl: string | null
	searchText: string | null
	setSearchText: (text: string | null) => void
	setPreviewUrl: (url: string | null) => void
	setIsUploadFormCollapsed: (bool: boolean) => void
}

const useAppState = create<State>(set => ({
	isUploadFormCollapsed: true,
	previewUrl: null,
	searchText: null,
	setSearchText: (text: string | null) => set({ searchText: text }),
	setPreviewUrl: (url: string | null) => set({ previewUrl: url }),
	setIsUploadFormCollapsed: bool =>
		set(state => ({ ...state, isUploadFormCollapsed: bool })),
}))

export default useAppState
