import { Col, Row } from "react-bootstrap"
import { StockItem } from "../../types"
import Card from "../Card/Card"

type ListProps = {
  items: StockItem[] | undefined
}

export default function List({ items }: ListProps) {
  return (
    <Row className="mt-3">
      {items?.map((item) => (
        <Col
          key={item.createdAt.toString()}
          xs={12}
          sm={6}
          lg={4}
          className="mb-5"
        >
          <Card {...item} />
        </Col>
      ))}
    </Row>
  )
}
