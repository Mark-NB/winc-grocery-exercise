import logo from './logo.svg';
import React from "react"
import './App.css';
import ShoppingCart from './components/ShoppingCart'
import GroceryList from "./components/GroceryList"

class Container extends React.Component {

  constructor() {
    super()
    this.state = {
      groceryItems: [
        { id: 1, title: "patat" },
        { id: 2, title: "pizza" },
        { id: 3, title: "cola" },
        { id: 4, title: "water met smaakje" },
        { id: 5, title: "nep melk" }
      ],
      shoppingListItems: [],
      addText: ""
    }
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.handleInputField = this.handleInputField.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }

  handleClickGroceryItem(event) {
    let targetTitle = event.target.title
    let targetId = 1 + event.target.id
    let isAlreadyinShoppingList = this.state.shoppingListItems.some((object) => object.title === targetTitle)
    let index = this.state.shoppingListItems.findIndex(object => {
      return object.title === targetTitle
    })
    if (!isAlreadyinShoppingList) {
      this.setState(prevState => {
        let newshoppingListItems = [...prevState.shoppingListItems]
        newshoppingListItems.push({ id: targetId, title: targetTitle, amount: 1 })
        let newState = { ...prevState, shoppingListItems: newshoppingListItems }
        return newState
      })
    } else {
      this.setState(prevState => {
        let otherNewshoppingListItems = [...prevState.shoppingListItems]
        otherNewshoppingListItems[index].amount += 0.5
        let newState = { ...prevState, shoppingListItems: otherNewshoppingListItems }
        return newState
      })
    }
  }

  clearCart(event) {
    this.setState({ shoppingListItems: [] })
  }

  handleInputField(event) {
    let value = event.target.value
    this.setState({ addText: value })
  }

  handleInputSubmit(event) {
    event.preventDefault()
    let value = event.target[0].value
    this.setState(prevState => {
      let newID = prevState.groceryItems.length + 1
      let newGroceryItems = [...prevState.groceryItems]
      newGroceryItems.push({ id: newID, title: value, amount: 1 })
      let newState = { ...prevState, groceryItems: newGroceryItems, addText: "" }
      return newState
    })
  }

  render() {
    return (
      <div>
        <header className='header'>Shopping Aid</header>
        <main className='main'>
          <GroceryList
            props={this.state.groceryItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            addText={this.state.addText}
            handleInputField={this.handleInputField}
            handleInputSubmit={this.handleInputSubmit}
          />
          <ShoppingCart
            props={this.state.shoppingListItems}
            clearCart={this.clearCart}
          />
        </main>
      </div >
    )
  }
}

function App() {
  return (
    <Container />
  );
}

export default App;
