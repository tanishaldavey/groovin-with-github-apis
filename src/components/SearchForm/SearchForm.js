import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        username: '',
        location: ''
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
                />
                <input 
                type='text'
                name='location'
                placeholder='Location'
                value={this.state.location}
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