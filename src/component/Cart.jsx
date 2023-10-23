import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/Slice";
function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // console.log(items);
  const cartItems = items.map((item) => {
    const removeItems = (product) => {
      dispatch(remove(product));
    };

    return (
      <div key={item.id} className="col-12 col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100px", height: "130px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>$:{item.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => removeItems(item.id)}>
              remove
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <h2>cart</h2>
        <div className="row">{cartItems}</div>
      </div>
    </div>
  );
}

export default Cart;
