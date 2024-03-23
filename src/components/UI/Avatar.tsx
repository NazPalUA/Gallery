type AvatarProps = { url: string | null }

export default function Avatar({ url }: AvatarProps) {
	return url ? (
		<img
			src={url}
			alt={"profile picture"}
			className="rounded-circle"
			width="34"
			height="34"
		/>
	) : (
		"Login"
	)
}
