import React from "react";

class Demo extends React.Component {
  state = {
    email: ''
  }
  render() {
    return <div>
      <input type="text" value={this.state.email} onChange={(ev) => {
        let target = ev.target;
        let text = target.value.trim();
        console.log("text", text)
        this.setState({
          email: text
        })
      }} />
    </div>
  }
}

export default Demo;
