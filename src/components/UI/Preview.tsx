import { Image } from "react-bootstrap"
import styled from "styled-components"

type PreviewProps = { path: string | null }

const StyledImage = styled(Image)`
  width: 75%;
  height: 300px;
  background-size: cover;

  @media (min-width: 576px) {
    width: 30%;
    height: 200px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`

export default function Preview({ path }: PreviewProps) {
  return path && <StyledImage src={path} className="rounded p-1 m-5" fluid />
}
