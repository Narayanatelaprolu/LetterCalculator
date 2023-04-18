import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, word: ''}

  getWord = e => {
    this.setState({word: e.target.value})
  }

  getCount = () => {
    const {word} = this.state
    if (word !== '') {
      this.setState({count: word.length})
    }
  }

  render() {
    const {count, word} = this.state
    console.log(count)
    console.log(word)

    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="Letter">Enter the phrase</label>
          <br />
          <input
            onChange={this.getWord}
            placeholder="Enter the phrase"
            id="Letter"
            type="text"
          />
          <br />
          <p className="wordCounter">No.of letters: {word.length}</p>
        </div>
        <div>
          <img
            className="calImage"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="Letter calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
