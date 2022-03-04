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
    deleteCollection,
    createCollection
} from "../../../../redux/actions/collectionActions"

import {
    nftAddress
} from "../../../../../../config"


class DeleteCollection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    createCollection = () => {
        this.setState({
            loading: true
        })
        
        let newCollection = {
            metadata: {
                title: "Collection " + (this.props.app.drawerData.count + 1),
                createdAt: new Date(),
                contractAddress: nftAddress
            },
        }

        this.props.createCollection(newCollection, (collection) => {
            this.props.updateCollection(true)
            this.props.hideDrawer()

        })
    }

	render() {
        return (
            <div className={"app-drawer-content-container standard-drawer theme-" + this.props.theme}>

                <div className="drawer-header">
                   <div className="drawer-title">
                        Home
                   </div>
                </div>

               <Button
                    className="main-button"
                    loading={this.state.loading}
                    onClick={() => this.createCollection()}
                    type="submit"
                    text="Create collection"
                    large="true"
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
    deleteCollection,
    updateCollection,
    hideDrawer,
    createCollection
})(DeleteCollection));
