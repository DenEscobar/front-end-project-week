import React, { Component } from 'react';
import axios from 'axios';

import Note from './Note'

class Notes extends Component {
    constructor(){
        super();
        this.state ={
            notes: []
        }
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState(()=>({notes:response.data}));
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    render(){
        return(
            <div>
                {this.state.notes.map( item => {
                    return(
                        <Note note={item} key={item.id}/>
                    )
                })}
            </div>
        )
    }
}

export default Notes