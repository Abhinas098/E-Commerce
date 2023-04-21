import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[exisitingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      alert("Already Added");
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "GET") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    state.items.forEach((element) => {
      console.log(element._id);
    });
    const existingCartItem = state.items[exisitingCartItemIndex];

    let updatedItems;
    if (action.item && existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: action.item.quantity + existingCartItem.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    let updatedTotalAmount;
    let amount;
    console.log(action, "act");

    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item._id === action.id
    );
    console.log(exisitingCartItemIndex);
    const exisistingItem = state.items[exisitingCartItemIndex];
    amount = exisistingItem.price * exisistingItem.quantity;
    updatedTotalAmount = state.totalAmount - amount;
    updatedItems = state.items.filter((item) => item._id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    const email = localStorage.getItem("email");
    fetch(
      `https://crudcrud.com/api/1021f448eee94cd6a08d3665296f461f/${email}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json().then((data) => {
          for (const key in data) {
            console.log(data[key]);
          }
        });
      })
      .catch((err) => alert(err.message));
    dispatchCart({ type: "ADD", item: item });
  };
  const getItemHandler = (item) => {
    dispatchCart({ type: "GET", item: item });
  };

  const removeItemHandler = (id) => {
    const email = localStorage.getItem("email");
    fetch(
      `https://crudcrud.com/api/1021f448eee94cd6a08d3665296f461f/${email}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatchCart({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    getItem: getItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
