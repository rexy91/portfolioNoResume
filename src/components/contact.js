import React, { Component } from 'react'

export class contact extends Component {
  render() {
    return (
      
      <div id='contactformdiv'>
      <form id ='contactForm'>
      <h3>Get In Touch</h3>
      <label for="fname">Name</label>
      <input type="text" id="fullname" name="fullname" placeholder="Your name.."/>
      <label for='email'>Email </label>
      <input type='text' id='email' placeholder='Your email'/>
      <label for='message'>Message</label>
      <textarea id="message" name="message" placeholder='your message ' style= {{height:'200px'}}></textarea>
      <input type='submit' value='Send Now'/>
      </form>
      </div>
    )
  }
}

export default contact
