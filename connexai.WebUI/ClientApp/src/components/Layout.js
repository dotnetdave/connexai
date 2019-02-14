import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

export default props => (
    <Grid >
        <Row>
            <Col >
                <NavMenu />
            </Col>
        </Row>
        <Row>
            <Col >
                {props.children}
            </Col>
        </Row>
    </Grid>
);
