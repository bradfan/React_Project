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
        this.handleSubmit = this.handleLoginSubmit.bind(this)
        this.handleChange = this.handleLoginChange.bind(this)
    }

    handleLoginChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }
    
    handleLoginSubmit() {
        let login = {
            id: this.state.id,
            name: this.state.name,
            password: this.state.password
            
        }
        LoginDataService.loginEmployee(login)
            .then(this.props.history.push(`/LoginRegistry`))

        this.state.loginCollection.forEach((elm) => {

        })

    }


}