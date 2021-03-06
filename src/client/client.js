import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import Router from "./router";
import reducer from "./redux/reducers";
import { configure as configureStore } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";

import "./styles/main.scss";

const PROXY_ROUTE = "/api";

function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

let axiosInstance 

if (lsTest() === true) {
    const token = localStorage.getItem('token');
    axiosInstance = axios.create({
        baseURL: PROXY_ROUTE,
        headers: { "authorization": `${token}` }
    });
} else {
    axiosInstance = axios.create({
        baseURL: PROXY_ROUTE,
    });
}

const { history, store } = configureStore(
    window.INITIAL_STATE,
    reducer,
    axiosInstance
);

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} location={this.props.location}>
                    <div>{renderRoutes(Router)}</div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

// This line connects rendered DOM elements with the React app
ReactDOM.hydrate(<Main />, document.getElementById("app"));