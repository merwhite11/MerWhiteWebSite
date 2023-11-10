import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap'
class App extends React.Component {
 render() {
  return(
    <div>
        <Container>
            <Row className="rows">
                <Col className='columns'>writing</Col>
                <Col className='columns'>dance</Col>
            </Row>
        </Container>
    </div>
  );
 }
}
export default App;