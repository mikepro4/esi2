import React, { ReactElement, useRef, useMemo, useState, useCallback, Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster } from "@blueprintjs/core";
import * as _ from "lodash"

class nftView extends Component {

    constructor (props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount = () => {
        console.log(this.props.item)
    }

    render() {
        return (
            <div> {this.props.item.nft.name}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default withRouter(connect(mapStateToProps, {
})(nftView));
