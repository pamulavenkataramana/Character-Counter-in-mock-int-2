import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// Replace your code here
const array = []
class App extends Component {
  state = {arrayList: [], inputValue: ''}

  onChangeValue = e => {
    this.setState({inputValue: e.target.value})
  }

  addThistoArray = () => {
    const {inputValue} = this.state
    const uniqueId = uuidv4()
    const characterLength = inputValue.length
    const arrayObject = {
      id: uniqueId,
      characterValue: inputValue,
      charLength: characterLength,
    }
    if (inputValue === '') {
      alert('please enter a value')
    } else {
      array.push(arrayObject)
      this.setState({arrayList: array, inputValue: ''})
    }
  }

  render() {
    const {arrayList, inputValue} = this.state
    console.log(arrayList)
    return (
      <div className="css-bg-container">
        <div className="css-left-side-container">
          <h1>Count the characters like a Boss</h1>
          <div>
            {arrayList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="css-image-itself"
              />
            ) : (
              <ul className="css-ul-container">
                {arrayList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p>{`${eachItem.characterValue} : ${eachItem.charLength}`}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <form className="css-right-side-container">
          <h1>Character Counter</h1>
          <div>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.onChangeValue}
              className="css-input-itself"
            />
            <button
              type="button"
              onClick={this.addThistoArray}
              className="css-button-itself"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
