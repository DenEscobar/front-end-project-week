import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            textBody: "",
            id: null
        }
    }

    componentDidMount(){
        const id =this.props.match.params.id;
        this.setState({
            id: id
        })
    }

    inputHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (id)=>{
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
                title: this.state.title,
                textBody: this.state.textBody,
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler(this.state.id)}>
                    <h2 className="formHeading">Edit Note:</h2>
                    <input className="formTitle" type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.inputHandler} />
                    <input className="formContent" type="text" name="textBody" value={this.state.textBody} placeholder="Notes" onChange={this.inputHandler}/>
                    <input className="formSubmit" type="submit" value="Update" />
                </form>
            </div>
        )
    }

}

export default UpdateForm