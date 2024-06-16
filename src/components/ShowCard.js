import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtk/slices/cart-slice";

function ShowCard() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = state.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  console.log(state);
  return (
    <>
      <Container className="py-5">
        <h1 className="pt-5">Welcome To Cart</h1>
        <Button
          variant="primary"
          className="my-3"
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </Button>
        <p>Total Price Is: {totalPrice.toFixed(2)}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>price</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            {state.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    style={{ width: "60px", height: "80px" }}
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteFromCart(product))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ShowCard;
