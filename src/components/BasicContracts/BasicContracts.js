import {Component} from 'react';
import React from 'react';
import Panel from "../Panel/Panel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Row} from 'reactstrap';
import {Table, Tooltip} from "antd";

class BasicContracts extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: true
        }
    }

    toggle() {
        this.setState({collapse: this.state.collapse = !this.state.collapse});
    }

    render() {

        { /* This variable will be replaced by a component */ }

        const titlePanel = (
            <span><FontAwesomeIcon className="mr-3" icon="share" />Contrats de base</span>
        )

        return (
            <Panel title={titlePanel}
                   collapse={this.state.collapse}
                   actions={[
                       <li><button className="btn-action" onClick={this.toggle}><FontAwesomeIcon icon={this.state.collapse ? 'angle-down': 'angle-left'}/></button></li>
                   ]}/>
        )
    }
}

export default BasicContracts;