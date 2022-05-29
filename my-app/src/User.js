import React, { Component } from 'react'

export default class User extends Component {

    componentWillUnmount(){

    alert("user has been deleted")

    }
  render() {
    return (
      <div>
          <ul>
              <li>Abdul Rafay</li>
              <li>Email:inbox.abdulrafay@gmail.com</li>
              <li>Contact: 000303203030</li>
          </ul>
      </div>
    )
  }
}
