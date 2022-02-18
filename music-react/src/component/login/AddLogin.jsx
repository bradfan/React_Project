import React, {Component} from 'react'
import LoginDataService from '../../service/LoginDataService'

class AddLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: "",
            password: "",
            loginCollection: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit() {
        let login = {
            id: this.state.id,
            name: this.state.jobTitle,
            password: this.state.firstName,
            
        }
        LoginDataService.loginEmployee(employee)
            .then(this.props.history.push(`/LoginRegistry`))

        this.state.loginCollection.forEach((elm) => {

        })

    }


}