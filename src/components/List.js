import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const groceries = props.props.map(item => <ListItem
        props={item}
        key={item.id}
        handleClickGroceryItem={props.handleClickGroceryItem}
        shoppingCart={props.shoppingCart}
    />)
    return (
        <ul className="list">
            {groceries}
        </ul>

    )
}


export default List