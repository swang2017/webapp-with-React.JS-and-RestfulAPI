import React, { Component } from 'react';

export class AddFlowers extends Component {
  constructor(props) {
    super(props)


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(event) {

    fetch('https://flowers.vapor.cloud/flower', {
    method: 'POST',
    body: JSON.stringify({
        name : this.state.name,
        description : this.state.description,
        imageURL : this.state.imageURL
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    // do not submit the form
    event.preventDefault()

  }

  // title textbox
  handleChange(event) {

    let value = event.target.value
    let name = event.target.name



    console.log("for textbox with the name " +name + " you entered value " +value)
    console.log([name])
    this.setState({
      [name] : value
    })

    console.log(this.state)

  }

  render()  {
    return (
      <div className="container">
        <form onSubmit = {this.handleSubmit} >
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Flower Name</label>
            </div>
            <div className="col-75">
             <input placeholder='flower name' name="name" onChange = {this.handleChange} type="text" />
           </div>
           </div>
           <div className="row">
               <div className="col-25">
               <label htmlFor="lname">Flower ImageURL</label>
                </div>
                <div className="col-75">
               <input placeholder='flower link URL' name="imageURL" onChange={this.handleChange} type="text" />
               </div>
             </div>
             <div className="row">
                <div className="col-25">
               <label htmlFor="lname">Flower Description</label>
                </div>
                <div className="col-75">
                <textarea name="description" placeholder="some description.." styles="height:200px" onChange={this.handleChange}></textarea>
                </div>
              </div>
             <input type="submit" value = "Post This Flower"/>
        </form>
      </div>
    )
  }


}
