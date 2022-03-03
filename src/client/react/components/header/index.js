import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import { showDrawer } from "../../../redux/actions/appActions"

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div
                className={classNames({
                    "app-header": true
                })}
            >

                Header

            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, {
    showDrawer
})(withRouter(Header));
