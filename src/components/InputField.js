import React from 'react'

function InputField(props) {
    return (

        <form onSubmit={props.handleInputSubmit}>
            <input
                type="text"
                value={props.addText}
                name="firstName"
                placeholder="Add Grocery"
                onChange={props.handleInputField}
            />
            <button>
                Add
            </button>
        </form>

    )
}

export default InputField