import React from 'react'
import CourseList from './courselist'

const url = "http://localhost:6700/courses"
class Courses extends React.Component {

    constructor(props) {
        super(props)

        console.log('in constr')
        this.state = {
            title: 'Courses',
            courses: ''
        }
    }

    componentDidMount() {
        console.log('in componentdidmount')
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                this.setState({courses:data})
            })
    }

    render() {
        console.log('courses =',this.state.courses)
        return (
            <div>
                
                <CourseList courseList={this.state.courses}/>
            </div>
        )
    }

}

export default Courses