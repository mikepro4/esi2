import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster  } from "@blueprintjs/core";

import qs from "qs";
import * as _ from "lodash"


class ConnectWallet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

	render() {
        return (
            <div className={"app-drawer-content-container standard-drawer connect-wallet theme-" + this.props.theme}>
               Connect wallet
            </div>

        )
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default withRouter(connect(mapStateToProps, {
})(ConnectWallet));
