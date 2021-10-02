import React, {Component} from 'react';

const url="http://localhost:6700/enquiries"

class Forms extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            phone:'',
            email:'',
            subject:''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangeSubject(event) {
        this.setState({subject: event.target.value})
    }

    handleSubmit() {

        var random = Math.floor(Math.random()*1000)

        var data = {
            id: random,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            subject: this.state.subject,
        }

        fetch(url,{
            method: 'POST',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response)=> response.json())

    }


    render() {
        return(
            <div>
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" 
                        value = {this.state.name}
                        onChange = {this.handleChangeName}
                        id="name"/>
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <input type="text" 
                        value = {this.state.phone}
                        onChange = {this.handleChangePhone}
                        id="phone"/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" 
                        value = {this.state.email}
                        onChange = {this.handleChangeEmail}
                        id="email"/>
                    </div>
                    <div>
                        <label for="subject">Subject</label>
                        <input type="text" 
                        value = {this.state.subject}
                        onChange = {this.handleChangeSubject}
                        id="subject"/>
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Forms