/**
 * Created by KatH on 11.29.029.
 */
import React, { Component } from 'react'
import Counter from './components/counter'

class ClickCount extends Component {
  constructor (props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {count: 4}
  }

  onClickButton () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    const the_style = {
      margin: '20px'
    }
    return (
        <div style={ the_style }>
          <button onClick={ this.onClickButton }>click me</button>
          <Counter caption="Hello" initValue={this.state.count} />
          <div>Click count: { this.state.count }</div>
        </div>
    )
  }
}

export default ClickCount