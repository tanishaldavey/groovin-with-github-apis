import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        username: '',
        location: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    queryUsers = e => {
        e.preventDefault()

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
                <input 
                type='text'
                name='location'
                placeholder='Location'
                value={this.state.location}
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