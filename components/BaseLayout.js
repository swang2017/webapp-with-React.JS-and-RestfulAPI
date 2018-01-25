
import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export class BaseLayout extends Component {

  render() {
    return (
      <div>
      <NavBar />
        {this.props.children}
      <Footer />

      </div>
    );
  }

}


export class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div><Link className = "linkFont" to='/'>See All Flowers</Link></div>
        <div><Link className = "linkFont" to="/add-flowers">Add Flowers</Link></div>
        <div><Link className = "linkFont" to="/contact-us">Contact Us</Link></div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>Copyright 2018</div>
      </div>
    )
  }

}
