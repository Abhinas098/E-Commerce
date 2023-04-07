import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./CartItem.css";
import CartContext from "../../store/CartContext";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  return (
    <tr className="items">
      <td className="image-title">
        <span id="img">
          <img src={props.img} alt={props.title} />
        </span>
        <span className="title">{props.title}</span>
      </td>
      <td>
        <div className="price">${props.price}</div>
      </td>
      <td>
        <div className="quantity">
          <span>{props.quantity}</span>
          <Button
            onClick={() => {
              removeItemHandler(props.id);
            }}
            size="sm"
          >
            Remove
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
