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

import CollectionActionsForm from "./collection_actions_form"

// import {
//     addToCollection
// } from "../../../../redux/actions/nftActions"

import {
    nftAddress
} from "../../../../../../config"


class CollectionActions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    handleFormSubmit = (data) => {
        console.log(data)
    }

	render() {
        return (
            <div className={"app-drawer-content-container standard-drawer theme-" + this.props.theme}>

                <div className="drawer-header">
                   <div className="drawer-title">
                        Collection
                   </div>
                </div>

                <CollectionActionsForm 
                    enableReinitialize="true"
                    loading={this.state.loading}
                    onSubmit={this.handleFormSubmit.bind(this)}
                />
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
    updateCollection,
    hideDrawer,
})(CollectionActions));
