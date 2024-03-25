import { z } from "zod"

function getSize(sizeInMB: number): number {
	return sizeInMB * 1024 * 1024
}

export const uploadSchema = z.object({
	title: z.string().min(1, "Title is required"),
	file: z
		.unknown()
		.refine(
			file => file instanceof File,
			"Image is required (jpeg, png or gif)"
		)
		.refine(
			file =>
				file instanceof File &&
				["image/jpeg", "image/png", "image/gif"].includes(file.type),
			"Invalid file type. Only jpeg, png, gif are allowed"
		)
		.refine(
			file => file instanceof File && file.size <= getSize(5),
			"File size should be less than " + getSize(5) + "MB"
		),
})
