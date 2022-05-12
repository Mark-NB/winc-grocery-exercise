import React from "react"

function ListItem(props) {
    if (props.shoppingCart) {
        return (
            <li
                className="list-item"
                id={props.props.id}
                title={props.props.title}
                amount={props.props.amount}
                onClick={props.handleClickGroceryItem}
            >
                {props.props.title} - amount : {props.props.amount}
            </li>
        )
    } else {
        return (
            <li
                className="list-item"
                id={props.props.id}
                title={props.props.title}
                amount={props.props.amount}
                onClick={props.handleClickGroceryItem}
            >
                {props.props.title}
            </li>
        )
    }
}

export default ListItem