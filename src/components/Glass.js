import React, {Component} from 'react';

export default class Glass extends Component{

    render(){
        return(
        <div>

            <p>Glass</p>
            <ul style={{color: this.props.color}}>
                <li>warna: {this.props.color}</li>
            </ul>
        </div>

       );
    }
}