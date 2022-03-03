import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import qs from "qs";
import moment from 'moment'
import classNames from "classnames";
import * as _ from "lodash"


class Collection extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }

    componentDidMount() {
    }
     

    renderHead = () => (
        <Helmet>
            <title>Collection</title>
        </Helmet>
    )

    render() {

        return (
            <div className="home-container">
                Collection
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    };
}


export default {
    component: withRouter(connect(mapStateToProps, {
    })(Collection))
}