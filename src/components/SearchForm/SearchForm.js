import React, { Component } from 'react';
import { getAllUsers, getUserInfo } from '../../apiCalls';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        username: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    queryUsers = e => {
        e.preventDefault()
        getAllUsers(this.state.username)
            .then(allUsers => {
                return allUsers.items.map(user => {
                    return user.url
                })
            })
            .then(url => {             
                getUserInfo(url)
            })
            .then(this.clearForm)
    }

    clearForm = () => {
        this.setState({ username: '' })
    }

    render () {
        return (
            <form>
                <input 
                type='text'
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                />
                <button
                onClick={this.queryUsers} 
                > Submit
                </button>
            </form>
        )
    }
} 
   

export default SearchForm;