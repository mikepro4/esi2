import React, { ReactElement, useRef, useMemo, useState, useCallback, Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster } from "@blueprintjs/core";
import * as _ from "lodash"

import {
    updateCollection,
    showDrawer
} from "../../../../redux/actions/appActions"

import {
    deleteCollection
} from "../../../../redux/actions/collectionActions"

class collectionView extends Component {

    constructor (props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount = () => {
    }

    deleteCollection = () => {
        this.props.showDrawer("delete-collection", {
            collectionId: this.props.item._id,
            collectionTitle: this.props.item.metadata.title
        })
    }

    render() {
        return (
            <div> 
                <div>{this.props.item.metadata.title} from {this.props.item.metadata.contractAddress}</div>
                <div onClick={() => this.deleteCollection()}>Delete</div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default withRouter(connect(mapStateToProps, {
    deleteCollection,
    updateCollection,
    showDrawer
})(collectionView));
