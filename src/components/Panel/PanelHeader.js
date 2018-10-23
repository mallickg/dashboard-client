import {Component} from "react";
import { Row } from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from 'prop-types';

const style = {
    height: '40px',
    backgroundColor: 'gray',
    color: '#FFFFFF',
    fontWeight: 'bold'
};

class PanelHeader extends Component {

    getActions(actions) {
        if (!actions || !actions.length) {
            return null;
        }
        const actionList = actions.map((action, index) => (
                <li key={`action-${index}`}>
                    <span>{action}</span>
                </li>
            ),
        );
        return actionList;
    }

    render() {

        const actionDom = this.props.actions && this.props.actions.length ?
            <ul className={`bilcrm-actions`}>{this.getActions(this.props.actions)}</ul> : null;

        return (
            <Row className="align-items-center justify-content-between" style={style}>
                <span className="pl-3">{this.props.title}</span><ul id="actions">{actionDom}</ul>
            </Row>
        )
    }
}

PanelHeader.defaultProps = {
    title: 'Panel Title 1',
    actions: null
}

PanelHeader.propTypes = {
    title: PropTypes.string || PropTypes.node,
    actions: PropTypes.arrayOf(PropTypes.node)
}

export default PanelHeader;