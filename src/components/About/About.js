import React, { Component } from 'react';
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      title: this.props.name,
      desc: `If there is a constructor() function in your component, this function will be called when the component gets initiated.
      The constructor function is where you initiate the component's properties.
      In React, component properties should be kept in an object called state.`
    }
    this.state.showTitle = true;
    this.state.buttonTitle = "Change button Title";
    this.state.prodList = ["1", "2", "3"]
    this.state.class = "showInRed";
    // this.state.memberList = this.props.memberList
  }

  // create method to manage the state of the compo

  changeTitle() {
    this.setState(
      { title: "About Section" }
    )
  }

  toggleTitle() {
    this.setState(
      {
        showTitle: !this.state.showTitle,
      }
    )
  }

  render() {
    return (
      <div className='about'>
        <p className={!this.state.showTitle ? this.state.class : ""}>{this.state.showTitle ? this.state.title : "there is not title"}</p>
        <button onClick={() => this.toggleTitle()}>{this.state.showTitle ? "Hide the title" : "Show the title"}</button>
        <p>{this.state.desc}</p>
        <button onClick={() => this.changeTitle()}>{this.state.buttonTitle}</button>
        <div>
          {this.state.prodList.map((item, i) => {
            return <p key={i}>This is product id {item}</p>
          })}
        </div>
      </div>
    )
  }
}

export default About;