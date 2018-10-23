import React from 'react';
import {Component} from 'react';
import Panel from "../Panel/Panel";
import {Table, Tooltip} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Row} from 'reactstrap';

class OpportunityList extends Component {

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

    render () {

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        }, {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];

        {/* the data will be provided by the server */}
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }

        { /* This variable will be replaced by a component */ }
        const panelContent = (
            <Row>
                <Table style={{width: '100%'}} columns={columns} dataSource={data} pagination={false} scroll={{ y: 240 }} />
            </Row>

        );

        const titlePanel = (
            <span><FontAwesomeIcon className="mr-3" icon="share"/>26 Opportunités - <span className="expired-opp">24 expirés</span></span>
        )

        return (
            <Panel title={titlePanel}
                   collapse={this.state.collapse}
                   content={panelContent}
                   actions={[
                       <li><button className="btn-action"><Tooltip placement="bottom" title="Visualiser toutes les interactions"><FontAwesomeIcon icon="sign-in-alt"/></Tooltip></button></li>,
                       <li><button className="btn-action" onClick={this.toggle}><FontAwesomeIcon icon={this.state.collapse ? 'angle-down': 'angle-left'}/></button></li>
                   ]}/>
        )
    }
}

export default OpportunityList;