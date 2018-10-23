import React, { Component } from 'react';
// Ant design library (https://ant.design/)
import 'antd/dist/antd.css';
// Bootstrap library (https://getbootstrap.com/)
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row, Col} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faArrowDown, faPlusSquare, faAngleDown, faSignInAlt, faAngleLeft, faShare, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import ActorDetails from "./components/ActorDetails/ActorDetails";
import OpportunityList from "./components/OpportunityList/OpportunityList";
import Interactions from "./components/Interactions/Interactions";
import Messages from "./components/Messages/Messages";
import Demands from "./components/Demands/Demands";
import SalesCycle from "./components/SalesCycle/SalesCycle";
import Products from "./components/Products/Products";
import BasicContracts from "./components/BasicContracts/BasicContracts";

library.add(faUser, faArrowDown, faPlusSquare, faAngleDown, faSignInAlt, faAngleLeft, faShare, faEnvelope, faClock)

class App extends Component {

    render() {

      return (
      <Container className="mt-4">
          <Row className="panel-row">
              <Col className="panel">
                <ActorDetails/>
              </Col>
          </Row>
          <Row className="panel-row">
              <Col className="panel">
                <OpportunityList/>
              </Col>
          </Row>
          <Row className="panel-row">
              <Col sm={8} className="panel">
                  <Interactions/>
              </Col>
              <Col sm={4} className="panel">
                  <Messages/>
              </Col>
          </Row>
          <Row className="panel-row">
              <Col className="panel">
                  <Demands/>
              </Col>
              <Col className="panel">
                  <SalesCycle/>
              </Col>
              <Col className="panel">
                  <Products/>
              </Col>
          </Row>
          <Row className="panel-row">
              <Col className="panel">
                  <BasicContracts/>
              </Col>
          </Row>
      </Container>
    );
  }
}

export default App;
