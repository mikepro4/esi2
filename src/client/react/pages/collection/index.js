import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import qs from "qs";
import moment from 'moment'
import classNames from "classnames";
import * as _ from "lodash"
import { Icon, Button, Classes, Intent } from "@blueprintjs/core";


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
                <div className="page-header">
                    <ul className="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Icon icon="home" />
                            </Link>
                        </li>

                        <li>
                            <Icon icon="chevron-right" />
                        </li>

                        <li>
                            <div className="breadcrumb-title active">
                                Collection 1
                            </div>
                        </li>

                    </ul>

                    <div className="actions-icon">
                        <Icon icon="settings" />
                    </div>
                </div>
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