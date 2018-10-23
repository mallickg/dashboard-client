import {Component} from "react";
import { Container } from "reactstrap";
import React from "react";
import Panel from "./Panel/Panel";

class Hello extends Component {

    constructor (props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return (
            <Container>
                <Panel/>
                <div>
                    <h1>Hello {this.props.who} !!</h1>
                    <h1>Counter : {this.state.count}</h1>
                    <button onClick={this.increment}>Increment counter</button>
                </div>
            </Container>
        );
    }
}

Hello.defaultProps = {
    who: 'Geoffrey'
}

export default Hello;