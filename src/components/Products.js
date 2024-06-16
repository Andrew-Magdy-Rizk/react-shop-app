import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  console.log(state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5 justify-content-center align-items-center">
        {state.map((product) => (
          <Col key={product.id} style={{ height: "650px" }}>
            <Card className="p-3" style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body style={{ height: "250px" }}>
                <Card.Title>{product.title.slice(0, 15)}...</Card.Title>
                <Card.Text>{product.description.slice(0, 90)}....</Card.Text>
                <Card.Text>{product.price} $</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Card
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
