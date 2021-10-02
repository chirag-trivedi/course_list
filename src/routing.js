import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Courses from './courses'
import Forms from './forms'

class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        
                        
                    </ul>
                </div>
                <div>
                    <Route exact path="/" component={Courses}></Route>
                    <Route exact path="/enquiries" component={Forms}></Route>
                </div>

            </BrowserRouter>
        )
    }
}

export default Routing;