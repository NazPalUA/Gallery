import { z } from "zod"

const maxMB = 12
const maxB = 1024 * 1024 * maxMB

export const uploadSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.refine(
			title => /^[a-z0-9 ]+$/i.test(title),
			"Title can only contain alphanumeric characters and spaces"
		),
	file: z
		.unknown()
		.refine(
			file => file instanceof FileList && file.length > 0,
			"Image is required (jpeg, png or gif)"
		)
		.refine(
			file =>
				file instanceof FileList &&
				file.length > 0 &&
				["image/jpeg", "image/png", "image/gif"].includes(file[0].type),
			"Invalid file type. Only jpeg, png, gif are allowed"
		)
		.refine(
			file =>
				file instanceof FileList && file.length > 0 && file[0].size <= maxB,
			"File size should be less than " + maxMB + "mb"
		),
})

export type FormData = z.infer<typeof uploadSchema>
