import { Image } from "react-bootstrap"

type CardImageProps = {
  path: string
  title: string
  type: "card" | "page"
}

export default function CardImage({ path, title, type }: CardImageProps) {
  const imageStyle: React.CSSProperties =
    type === "page"
      ? {
          objectFit: "contain",
          height: "100%",
          maxHeight: "70vh",
          width: "auto",
        }
      : {
          objectFit: "cover",
          height: "350px",
        }

  return (
    <Image
      style={imageStyle}
      src={path}
      alt={title}
      className="img-fluid rounded-top card-image"
      rounded
    />
  )
}
