import React from 'react'
import { Link } from 'react-router-dom';

// class CourseList extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('props=',this.props.courseList)
//         this.state = {
//             shouldIrender: false,
//             data: this.props.courseList
//         }
//     }

//     render() {
//         return(
//             <div>
//                 {this.state.data}
//             </div>
//         )
//     }

// }

const CourseList = (courseList) => {
    let formRender = false;
    const click = () => {
        console.log('clicked');
        formRender = true;
    }

    const renderList = ({ courseList }) => {
        if (courseList) {
            return courseList.map((item,index) => {
                return (

                    <div className="card col-md-2" key={index}>
                    <div className="row">
                    <img className="card-img-top" src={item.img} />
                    <span className="topTemp">{item.name}</span>
                    </div>
                    <div className="card-body">
                    <span className="max">{item.details}</span>   
                    <h4 className="card-title"></h4>
                    <p className="card-text">
                        <p className="day">Rs. {item.fee} </p>
                    </p>
                    <Link to="/enquiries" className="btn btn-primary">
                        enquiries
                    </Link>
                    </div>
                </div>

                )
            }
            )
        }
    }

    return (
        <div className="container">
            <div className="row">
                {renderList(courseList)}
            </div>
        </div>
    )
}

export default CourseList