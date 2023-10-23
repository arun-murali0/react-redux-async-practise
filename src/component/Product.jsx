import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/Slice";
import { getProducts } from "../store/productSlice";

function Product() {
  // const [item, setItem] = useState([]);

  const dispatch = useDispatch();
  const { data: item, status } = useSelector((state) => state.products);
  console.log(item);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading........</p>;
  } else if (status === "Error") {
    return <p>Error.</p>;
  }

  const addCart = (product) => {
    dispatch(add(product));
  };

  const listedItems = item.map((items) => {
    return (
      <div key={items.id} className="col-12 col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={items.image}
            style={{ width: "100px", height: "130px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>$:{items.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addCart(items)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">{listedItems}</div>
    </div>
  );
}

export default Product;
