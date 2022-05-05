import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "patat" },
                { id: 2, title: "pizza" },
                { id: 3, title: "cola" }
            ]
        }
    }

    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`)
    }

    render() {

        const groceries = this.state.groceryItems.map(item => 
        <ListItem 
            key={item.id} 
            value={item.title}
            clickItem={() => this.onItemClick(item)}
        />)
        return (
            <ul>
                {groceries}
            </ul>
        )
    }
}

export default List