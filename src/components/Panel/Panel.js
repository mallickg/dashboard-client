import { Component } from 'react';
import React from "react";
import PropTypes from 'prop-types';
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";

class Panel extends Component {

    render() {
        return (
            <div>
                <PanelHeader title={this.props.title}
                     actions={this.props.actions}/>
                <PanelContent content={this.props.content} collapse={this.props.collapse}/>
            </div>
        )
    }
}

Panel.defaultProps = {
    title: "Your title here",
    content: "Content here",
    actions: [],
    collapse: false
}

Panel.propTypes = {
    title: PropTypes.string,
    content : PropTypes.string || PropTypes.node,
    actions : PropTypes.arrayOf(PropTypes.node),
    collapse : PropTypes.bool
}

export default Panel;