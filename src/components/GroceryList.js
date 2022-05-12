import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {

    return (
        <div className="grocery-list">
            <h5>Grocery Items</h5>
            <List
                props={props.props}
                handleClickGroceryItem={props.handleClickGroceryItem}
            />
            <InputField
                handleInputField={props.handleInputField}
                handleInputSubmit={props.handleInputSubmit}
                addText = {props.addText}
            />
        </div>
    )
}

export default GroceryList