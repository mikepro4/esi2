import React from "react";
import App from "../App";
import Home from "../react/pages/home";
import Mint from "../react/pages/mint"
import Collection from "../react/pages/collection"

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: "/",
                exact: true,
                params: {
                    name: "Home"
                }
            },
            {
                ...Collection,
                path: "/collection/:collectionId",
                exact: true,
                params: {
                    name: "Colelction"
                }
            },
            {
                ...Mint,
                path: "/mint",
                exact: true,
                params: {
                    name: "Mint"
                }
            }
        ]
    }
];