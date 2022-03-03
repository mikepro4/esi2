import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"

import NavLinks from "./nav_links"


class Nav extends Component {

    state = {
    }

    componentDidMount = () => {

    }

	render() {


        let mainLinks = [
			{
			  	url: "/",
				name: "Home",
			},
			{
			  	url: "/mint",
				name: "Mint",
			}
		]

		return (
			<div className="nav-container">

                <NavLinks
                    links={mainLinks}
                    hideMenu={() => {}}
                />

            </div>
        )
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {
})(Nav);
