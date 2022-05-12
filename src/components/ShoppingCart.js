import React from "react"
import List from "./List"

function ShoppingCart(props) {

    return (
        <div className="shopping-cart">
            <h5>Shopping Cart</h5>
            <List props={props.props} shoppingCart="true" />
            <button onClick={props.clearCart}>Clear shopping cart</button>
        </div>
    )
}

export default ShoppingCart