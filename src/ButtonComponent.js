import React,  { Component } from 'react';


class ButtonComponent extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <button>
                {this.props.value}
            </button>
        )
    }
}

export default ButtonComponent;