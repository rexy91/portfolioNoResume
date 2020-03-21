import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import bank from '../projectPhotos/bank.jpg'
import yourteamtime from '../projectPhotos/yourteamtime.jpg'
import ticketfinder from '../projectPhotos/ticketfinder.jpg'
import {withRouter} from 'react-router-dom'
import {  Icon, Image } from 'semantic-ui-react'

// import ticketfinder from '../projectPhotos/ticketfinder.jpg'
import {NavLink, Link} from 'react-router-dom'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 , toggleCard1 : true , toggleCard2: true, toggleCard3: true};
  }

  hoverCardOne1 = (e) => {

    this.setState({
      toggleCard1: !this.state.toggleCard1
    }) 
  }

  hoverCardOne2 = (e) => {

    this.setState({
      toggleCard2: !this.state.toggleCard2
    }) 
  }

  hoverCardOne3 = (e) => {
    
    this.setState({
      toggleCard3: !this.state.toggleCard3
    }) 
  }

  openLink = (e) => {
    console.log(e.target.name)
    const bankGithub = "https://github.com/rexy91/FlatironVirtualBankfront"
    const bankWebsite = "https://flatironvirtualbank.netlify.com/"
    const HrGithub = "https://github.com/rexy91/mod4projectHR-frontend"
    const HrWebsite = "https://yourteamtime.netlify.com/"
    const ticketfinderGithub = "https://github.com/rexy91/TicketFinderfrontend"
    const ticketfinderWebsite = "https://ticketfinderfrontend.herokuapp.com/"

    if(e.target.name === 'bank' && e.target.innerText === 'GITHUB'){
      window.open(`${bankGithub}`);}
    else if (e.target.name === 'bank' && e.target.innerText === 'LIVE DEMO')
    {
      window.open(`${bankWebsite}`)
    }
    else if (e.target.name === 'hr' && e.target.innerText === 'GITHUB'){
      window.open(`${HrGithub}`)
    }
    else if (e.target.name ==='hr' && e.target.innerText === 'LIVE DEMO'){
      window.open(`${HrWebsite}`)
    }
    else if (e.target.name ==='ticketfinder' && e.target.innerText ==='GITHUB'){
      window.open(`${ticketfinderGithub}`)
    }
    else if (e.target.name ==='ticketfinder' && e.target.innerText ==='LIVE DEMO'){
      window.open(`${ticketfinderWebsite}`)
    }
    
  }

  renderCard1Front = () => {

      return     <Card className = 'card1' onMouseEnter = {this.hoverCardOne1} shadow={5} style={{minWidth: '450', width:"70vw",height:'60vh', margin:'auto', marginBottom:'7vh'}}>
                      <CardTitle  className = 'projectFront' style={{color: '#fff',height:'450px', backgroundImage: "url(" + bank +")"}} ></CardTitle>
                      <CardText style={{textAlign:'center',padding:'5%', marginLeft:'4vw'}}>
                      A full-stack web based banking application using React and Rails, allows users to sign up for a virtual bank account and perform some transactions, such as transfering funds, making deposit and withdrawal.
                      </CardText>
                      <CardActions style={{textAlign:'center'}}border>
                        <Button name = 'bank' id ='zzz' name = 'bankGithub' onClick = {this.openLink} colored>GitHub</Button>
                        <Button colored></Button>
                        <Button name = 'bank' onClick = {this.openLink} colored>Live Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
      
}
  renderCard1Back = () => {

    return     <Card className = 'card1' onMouseLeave = {this.hoverCardOne1}  shadow={5} style={{minWidth: '450', width:"70vw",height:'60vh', margin:'auto', marginBottom:'7vh'}}>
                <Grid className = 'projectBack' >
                  <Cell col = {12}><h4>Flatiron Virtual Bank</h4></Cell>
                  <Cell  col ={6}>
                          <h5>Frontend</h5>
                          <p>React</p>
                          <p>Redux</p>
                          <p>JavaScript</p>
                          <p>SemanticUI</p>
                          <p>chartJS</p>
                          <p>MDBReact</p>
                  </Cell>
                  <Cell col ={6}>
                          <h5>Backend</h5>
                          <p>Ruby on Rails</p>
                          <p>Action Mailer</p>
                          <p>JWT Auth</p>
                          <p>PostgreSQL</p>
                  </Cell>
                </Grid>
                    <CardActions  style={{textAlign:'center', cursor:'pointer'}}>
                    <Button  name = 'bank' onClick = {this.openLink} colored>GitHub</Button>
                    <Button colored></Button>
                    <Button  name = 'bank' onClick = {this.openLink} colored>Live Demo</Button>
                    </CardActions>
              </Card>
  }

  renderCard2Front = () => {
    return     <Card  onMouseEnter = {this.hoverCardOne2} shadow={5} style={{minWidth: '450', width:"70vw",height:'60vh', margin:'auto', marginBottom:'7vh'}}>
                  <CardTitle  className = 'projectFront' style={{color: '#fff', height: '350px',backgroundImage: "url(" + yourteamtime +")"}} ></CardTitle>
                  <CardText style={{textAlign:'center', padding:'5%', marginLeft:'4vw'}}>
                  A full-stack web application designed to be used by managers. A manager will be able to add/delete companies and employees, create a weekly schedule for the employees which belongs to a particular company that they manage.
                  </CardText>
                  <CardActions style={{textAlign:'center'}}  border>
                    <Link to ='/'>
                    <Button name = 'hr' onClick = {this.openLink} colored>GitHub</Button>
                    </Link>
                    <Button colored></Button>
                    <Button name = 'hr' onClick = {this.openLink}  colored>Live Demo</Button>
                  </CardActions >
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
}

renderCard2Back = () => {

  return     <Card onMouseLeave = {this.hoverCardOne2}  shadow={5} style={{minWidth: '450', width:"70vw",height:'40vh', margin:'auto', marginBottom:'7vh'}}>
                  <Grid className = 'projectBack' >
                    <Cell col = {12}><h4>Your Team's Time</h4></Cell>
                    <Cell  col ={6}>
                            <h5>Frontend</h5>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>ReactSpreadsheet</p>

                    </Cell>

                    <Cell col ={6}>
                            <h5>Backend</h5>
                            <p>Ruby on Rails</p>
                            <p>JWT Auth</p>
                            <p>PostgreSQL</p>
                    </Cell>
                  </Grid>
                      <CardActions  style={{textAlign:'center', cursor:'pointer'}}>
                      <Button name = 'hr' onClick = {this.openLink} colored>GitHub</Button>
                      <Button colored></Button>
                      <Button name = 'hr' onClick = {this.openLink} colored>Live Demo</Button>
                      </CardActions>
                </Card>
}

renderCard3Front = () => {

  return     <Card onMouseEnter = {this.hoverCardOne3} shadow={5} style={{minWidth: '450', width:"70vw",height:'60vh', margin:'auto', marginBottom:'7vh'}}>
                  <CardTitle  className = 'projectFront' style={{color: '#fff', height: '500px',backgroundImage: "url(" + ticketfinder +")"}} ></CardTitle>
                  <CardText style={{textAlign:'center',padding:'5%',marginLeft:'4vw'}} >
                  Built a full-stack application with asynchronous fetches, external API using JavaScript, HTML, and Css. Users can browse upcoming events and add to their personal planner.
                  </CardText>
                  <CardActions style={{textAlign:'center'}} border>
                    <Link to ='/'>
                    <Button name = 'hr' onClick = {this.openLink} colored>GitHub</Button>
                    </Link>
                    <Button colored></Button>
                    <Button name = 'hr' onClick = {this.openLink} colored>Live Demo</Button>
                  </CardActions >
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
}

renderCard3Back = () => {

  return     <Card onMouseLeave = {this.hoverCardOne3} shadow={5} style={{minWidth: '450', width:"70vw",height:'40vh', margin:'auto', marginBottom:'7vh'}}>
              <Grid className = 'projectBack' >
                <Cell col = {12}><h4>TickerFinder</h4></Cell>
                <Cell  col ={6}>
                        <h5>Frontend</h5>
                        <p>JavaScript</p>
                </Cell>

                <Cell col ={6}>
                        <h5>Backend</h5>
                        <p>Ruby on Rails</p>
                        <p>PostgreSQL</p>
                </Cell>
              </Grid>
                  <CardActions  style={{textAlign:'center', cursor:'pointer'}}>
                  <Button name='ticketfinder' onClick = {this.openLink}  colored>GitHub</Button>
                  <Button colored></Button>
                  <Button name = 'ticketfinder' onClick = {this.openLink} colored>Live Demo</Button>
                  </CardActions>
            </Card>

        // return      <Card>
        //       <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        //       <Card.Content>
        //         <Card.Header>Matthew</Card.Header>
        //         <Card.Meta>
        //           <span className='date'>Joined in 2015</span>
        //         </Card.Meta>
        //         <Card.Description>
        //           Matthew is a musician living in Nashville.
        //         </Card.Description>
        //       </Card.Content>
        //       <Card.Content extra>
        //         <a>
        //           <Icon name='user' />
        //           22 Friends
        //         </a>
        //       </Card.Content>
        //     </Card>
}

  toggleCategories() {
    // console.log(bank)
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid ">
          {/* Project 1
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle onMouseOver = {this.hoverCardOne} id = 'project1card' style={{color: '#fff', height: '250px'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Link to ='/'>
              <Button colored>GitHub</Button>
              </Link>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
          {this.state.toggleCard1 ? this.renderCard1Front() : this.renderCard1Back()}
          {this.state.toggleCard2 ? this.renderCard2Front() : this.renderCard2Back()}
          {this.state.toggleCard3 ? this.renderCard3Front() : this.renderCard3Back()}
          {/* Project 2 */}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}

          {/* Project 3 */}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div className = "projectPage">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>

          <Grid>
            <Cell className = 'projectPage' col={12}>
              <div id = 'test' className="content ">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default withRouter(Projects);
