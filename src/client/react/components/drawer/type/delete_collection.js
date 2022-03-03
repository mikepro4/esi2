import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster  } from "@blueprintjs/core";

import qs from "qs";
import * as _ from "lodash"

import {
    updateCollection,
    hideDrawer
} from "../../../../redux/actions/appActions"

import {
    deleteCollection
} from "../../../../redux/actions/collectionActions"


class DeleteCollection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    deleteCollection = () => {
        this.props.deleteCollection(this.props.app.drawerData.collectionId, () => {
            this.props.updateCollection(true)
            this.props.hideDrawer()
        })
    }

	render() {
        return (
            <div className={"app-drawer-content-container standard-drawer connect-wallet theme-" + this.props.theme}>
               Delete {this.props.app.drawerData.collectionTitle} ?

               <div className="confirm" onClick={() => this.deleteCollection()}>
                   Confirm
               </div>
            </div>

        )
	}
}

function mapStateToProps(state) {
	return {
        app: state.app
	};
}

export default withRouter(connect(mapStateToProps, {
    deleteCollection,
    updateCollection,
    hideDrawer
})(DeleteCollection));
