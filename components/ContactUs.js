
import React, { Component } from 'react';

export class ContactUs extends Component {

  constructor(props) {
    super(props)

  }



  render()  {
    return (
      <div className="container">

        <form action="action_page.php">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            </div>
          </div>


          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder="Write something.." styles="height:800px"></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
</div>
    )
  }


}
