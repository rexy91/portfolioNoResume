import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import rails from '../projectPhotos/rails.jpg'
export class aboutme extends Component {
  render() {

        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>About Me</h2>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
    
              </Cell>
              <Cell col={6}>
                <h2>Skills</h2>
                <hr/>
    
                <div className="contact-list">
                  <Grid>
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        {/* <i className="fa fa-phone-square" aria-hidden="true"/> */}
                        <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                        JavaScript
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        {/* <i className="fa fa-fax" aria-hidden="true"/> */}
                        <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                        (123) 456-7890
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                        someone@example.com
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        {/* <i className="fa fa-skype" aria-hidden="true"/> */}
                        <img src={rails} style = {{height:'90px', width:'80px' }}/>
                        MySkypeID
                      </ListItemContent>
                    </ListItem>
                  </List>
                  </Grid>
                </div>
              </Cell>
            </Grid>
          </div>
    )
  }
}

export default aboutme
