///////////////////////////////////////////////////////////////////////
////////////////////      DASHBOARD APP.JS     ////////////////////////
///////////////////////////////////////////////////////////////////////
// 05/02/18 - REFACTOR 0.8
// DGO

'use strict';

import React, { Component } from 'react';
import API from '../../common/utils/API';
import LoadingPage from '../../common/LoadingPage';
import { Col, Row, Container } from '../../common/grid';
import { Button } from '../../common/form';
import { DashHome } from './components';
import ErrorBoundary from '../../common/error/ErrorBoundary'
import './App.css';

const config = require('../../../config').init();


// The APP class is currently the main hub for the platform.
// It requires the user object, so it will handle all form changes and submits.
export default class App extends Component {
    state = {
        isLoading: true,
        launchingNetwork: false,
        pageData: {},
    }


    /// GRABS OUR PAGE DATA.  THIS IS WHERE ALL THE TEXT EXISTS FOR THE PLATFORM PAGES.  TO MAKE CHANGES SEE ../static/platformPageData.json
    getDashboardPageData() {
        return new Promise((resolve, reject) => { 
            fetch('/dashboard/static/dashboardPageData.json')
                .then(resp => { let json = resp; return { json, resolve }})
                .then(({ json, resolve }) => resolve(json) )
        })
    }

    componentDidMount() {
        let pageData = this.getDashboardPageData().then(resp => { return resp.json() });
        Promise.all([pageData]).then(values => {
            this.setState({ pageData: values[0], isLoading: false}) 
        });
    }
    renderLeftColumn() {
        if(!this.state.launchingNetwork) {
            return(
                <DashHome pageText={this.state.pageData.main }  />            
            );
        }
    }
    render() {
        return (
            <ErrorBoundary>
            { this.state.isLoading ? ( <LoadingPage /> ) : (
                <div>
                    <div className="app-container">
                        <Container>
                            <Row>
                                <Col size='12'>    
                                    { this.renderLeftColumn() }    
                                
                                </Col>
                                { /* 
                                <Col size='4'>
                                    <h2 className="title">{ this.state.pageData.main.asideTitle }</h2>
                                    <p>
                                        { this.state.pageData.main.asideParagraph }
                                    </p>
                                    <img src="static/images/mercyblueicon.jpg" className="img-fluid" alt="Machines Logo" />
                                </Col>
                                */}
                            </Row>
                        </Container>
                    </div>
                </div>
            )}
            </ErrorBoundary>
        );
    };
};