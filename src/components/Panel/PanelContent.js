import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';

class PanelContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: this.props.collapse
        }
    }


    componentWillReceiveProps({ collapse }) {
        this.setState({ collapse })
    }

    render() {
        return (
            <div className={"collapse" + (this.state.collapse ? "in" : "")}>{this.props.content}</div>
        )
    }
}

PanelContent.defaultProps = {
    content: "No Content",
    collapse: false
}

PanelContent.propTypes = {
    content : PropTypes.string || PropTypes.node,
    collapse : PropTypes.bool
}

export default PanelContent;