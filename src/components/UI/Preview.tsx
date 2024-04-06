type PreviewProps = { path: string | null }

import style from "./Preview.module.scss"

export default function Preview({ path }: PreviewProps) {
	return (
		path && (
			<div
				className={`rounded p-1 m-5 ${style.preview}`}
				style={{
					backgroundImage: `url(${path}`,
				}}
			></div>
		)
	)
}
