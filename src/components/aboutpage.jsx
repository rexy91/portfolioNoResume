import React, { Component } from 'react'

export class aboutpage extends Component {
    render() {
        return (
            <div className = 'ui fluid container'>
                <div className = 'ui grid'>
                    <div className = 'twelve wide row '>
                        <div className = 'sixteen wide mobile twelve wide computer column' id ='aboutFirstColumn'>
                            <h3>About Me</h3>
                            <p>Full-stack developer based in New York City. I have a passion for building full-stack responsive web applications. Experienced in Ruby on Rails, JavaScript, React and Redux based programming and a background in computer science. Pursued a Bachelor of Science degree in Computer Science, and a recent graduate of Flatiron Bootcamp for the full-stack web development program.</p>
                        </div>
                        <div className = 'four wide column '></div>
                        
                    </div>
                        <div className = 'four wide column '></div>

                        <div className = 'twelve wide computer sixteen wide mobile column' id ='aboutSecondColumn' style = {{border:'solid 1px'}}>
                            <div className = 'twelve wide row' style = {{border:'solid 1px'}} >
                                    <h3>Skills</h3>
                            </div>

                            <div className = 'twelve wide row' style = {{border:'solid 1px'}} >
                                        <div className = 'six wide column' style = {{border:'solid 1px'}}>
                                        <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                                        <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                                        <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                                        <img src='https://lh3.googleusercontent.com/BqIoMfAu3xBNXPQZJ_huFLKwUSvHHWVzmft4PdW22pkzvU1Wuax6G2Rv-Ux9jgHtCDAJ3nQ=s85'/>
                                        </div>
                                        <div className = 'six wide column' style = {{border:'solid 1px'}}>
                                                    
                                        </div>
                            </div>


                        </div>
                            {/* <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                            <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                            <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                            <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png"/>
                            <p>Full-stack developer based in New York City. I have a passion for building full-stack responsive web applications. Experienced in Ruby on Rails, JavaScript, React and Redux based programming and a background in computer science. Pursued a Bachelor of Science degree in Computer Science, and a recent gradute of Flatiron Bootcamp for the full-stack web development program.</p> */}
                        
                </div>
            </div>
        )
    }
}

export default aboutpage
