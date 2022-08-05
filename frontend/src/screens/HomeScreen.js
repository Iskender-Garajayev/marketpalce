import React from 'react'
import products from '../products'
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>latest products</h1>

      <Row>
        {products.map(products=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{products.name}</h3>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default HomeScreen