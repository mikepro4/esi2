import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import classNames from "classnames";
import keydown from "react-keydown";
import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

import qs from "qs";
import * as _ from "lodash"
import axios from "axios";
import Web3Modal from "web3modal";

import Drawer from "./react/components/drawer"
import Scroll from "./react/components/scroll"

import {
    showDrawer,
} from "../client/redux/actions/appActions"

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static loadData(store, match, route, path, query) {
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div
                className="app"
                className={classNames({
                    "app": true
                })}
            >

                <div className="main-section">
                    <div className="app-route-container">
                        {renderRoutes(this.props.route.routes)}
                    </div>
                </div>
                
                <div className="placeholder"></div>

                <Scroll />
                {this.props.drawerOpen && <Drawer type={this.props.drawerType} />}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        appReducer: state.appReducer,
        drawerType: state.app.drawerType,
        drawerOpen: state.app.drawerOpen,
        account: state.app.account,
        app: state.app
    };
}

export default {
    component: withRouter(connect(mapStateToProps, {
        showDrawer
    })(App))
};