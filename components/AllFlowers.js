import React, { Component } from 'react';
import '../App.css';

export class AllFlowers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flowers: []
    }


  }


  componentDidMount() {

    const API = 'https://flowers.vapor.cloud/flowers'

    fetch(API)
    .then(
      response =>  response.json()
    ).then(
      json => this.setState({
        flowers : json
      })
    )
  }

  render()  {
    let flowersList = this.state.flowers.map(function(flower,index){
      return <li key={index}><b>{flower.name}</b> <p></p> <img src={flower.imageURL} className="img-responsive"/><p></p> {flower.description} <p></p></li>
    })

    return (
      <div className="containerMainPage">
        <div>
        <ul> {flowersList} </ul>
      </div>
      </div>
    )
  }


}
