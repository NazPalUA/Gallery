import { Image } from "react-bootstrap"
import style from "./Preview.module.scss"

type PreviewProps = { path: string | null }

export default function Preview({ path }: PreviewProps) {
  return (
    path && (
      <Image src={path} className={`rounded p-1 m-5 ${style.preview}`} fluid />
    )
  )
}
