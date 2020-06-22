import React, { Component } from 'react';
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
        this.clearForm()
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