import React, {Component} from 'react';

export default class Saucer extends Component{

    render(){
        return (
            <div>

            <p>My Saucer</p>
            <ul>
                <li>width: {this.props.width}</li>
            </ul>
        </div>
        );
    }
}