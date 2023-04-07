import React from "react";
import { Button } from "react-bootstrap";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <tr className="items">
      <td className="image-title">
        <span id="img">
          <img src={props.img} alt="" />
        </span>
        <span className="title">{props.title}</span>
      </td>
      <td>
        <div className="price">{props.price}</div>
      </td>
      <td>
        <div className="quantity">
          <span>{props.quantity}</span>
          <Button size="sm">Remove</Button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
