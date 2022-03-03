import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent  } from "@blueprintjs/core";

import * as _ from "lodash"

import {
    hideDrawer
} from '../../../redux/actions/appActions'

import ConnectWallet from "./type/connect_wallet"

class Drawer extends Component {

    state = {
        hide: false
    }

    hideDrawer() {
        this.setState({
            hide: true
        })
        setTimeout(() => {
            this.props.hideDrawer()
        }, 300)
    }

    renderDrawer(type) {
        switch (type) {
            case "connect-wallet":
                return (<ConnectWallet hideDrawer={() => this.hideDrawer()} enablePortal/>)
            default:
                return ;
        }
    }

	render() {

        let style
        if(this.props.app.clientWidth > 5000) {
            style = {position: "absolute", left: this.props.app.position.y + "px", top: this.props.app.position.x + "px", bottom: "inherit", width: 300 + "px"}
        }

        return (
            <div className={"app-drawer theme-" + this.props.theme + " " + classNames({
                "full-screen": this.props.fullScreen
            })} style={style}>
                <div 
                    className={"app-drawer-background theme-" + this.props.theme + " " + classNames({
                        "hide": this.state.hide
                    })}
                    onClick={() =>  {
                           this.hideDrawer()
                        }
                    }
                >

                </div>

                <div className={"app-drawer-content theme-" + this.props.theme + " " + classNames({
                        "hide": this.state.hide
                    })} >
                    {this.renderDrawer(this.props.type)}
                </div>
            </div>

        )
		
	}
}

function mapStateToProps(state) {
	return {
        drawerData: state.app.drawerData,
        app: state.app
	};
}

export default connect(mapStateToProps, {
    hideDrawer
})(Drawer);