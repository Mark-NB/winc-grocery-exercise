import React from "react"

function ListItem(props) {
    return (
        <li
            key={props.id}
            className="list-item"
            onClick={props.clickItem}
            value={props.value}
        >
            {props.value}
        </li>
    )
}

export default ListItem