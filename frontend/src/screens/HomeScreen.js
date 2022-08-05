import React from 'react'
import products from '../products'
import { Row, Col } from "react-bootstrap";
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <>
      <h1>latest products</h1>

      <Row>
        {products.map((product)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={product}/>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default HomeScreen