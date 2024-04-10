import { Image } from "react-bootstrap"

type AvatarProps = { url: string | null }

export default function Avatar({ url }: AvatarProps) {
  return url ? (
    <Image
      src={url}
      alt={"profile picture"}
      roundedCircle
      width="34"
      height="34"
    />
  ) : (
    "Login"
  )
}
