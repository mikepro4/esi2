import {
    UPDATE_TOTAL_PIXELS,
    UPDATE_TOTAL_SCROLLED_PIXELS,
    SCROLL_TO,
    SCROLL_TO_RESET,
    UPDATE_COLLECTION,
    UPDATE_COLLECTION_ITEM,
    SHOW_DRAWER,
    HIDE_DRAWER,
} from "./types";

import * as _ from "lodash";
import qs from "qs";
import axios from "axios";

/////////////////////////////////////////////////

export const updateCollection = (update, success) => async (
    dispatch,
    getState,
    api
) => {
    dispatch({
        type: UPDATE_COLLECTION,
        payload: update
    });
};

/////////////////////////////////////////////////

export const updateCollectionItem = (item, success) => async (
    dispatch,
    getState,
    api
) => {
    dispatch({
        type: UPDATE_COLLECTION_ITEM,
        payload: item
    });
};


///////////////////////////////////////////////////

export const updateQueryString = (
    updatedState,
    location,
    history
) => dispatch => {
    let queryParams = qs.parse(location.search.substring(1));
    const updatedQuery = _.assign({}, queryParams, updatedState);
    const str = qs.stringify(updatedQuery);
    history.push({
        search: "?" + str
    });
};

/////////////////////////////////////////////////

export const updateTotalPixels = (total, clientWidth, clientHeight) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_TOTAL_PIXELS,
        total: total,
        clientWidth: clientWidth,
        clientHeight: clientHeight,
    });
}

export const updateTotalScrolledPixels = (px) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_TOTAL_SCROLLED_PIXELS,
        pixels: px
    });
}

/////////////////////////////////////////////////

export const setScrollTo = (px) => async (dispatch) => {
    dispatch({
        type: SCROLL_TO,
        payload: px
    });
}

export const resetScrollTo = (px) => async (dispatch) => {
    dispatch({
        type: SCROLL_TO_RESET
    });
}


/////////////////////////////////////////////////

export const showDrawer = (type, drawerData, element, drawerLocation) => async (
    dispatch,
    getState,
    api
) => {
    if (drawerData) {
        dispatch({
            type: SHOW_DRAWER,
            payload: type,
            drawerData: drawerData,
            element: element,
            drawerLocation: drawerLocation
        });
    } else {
        dispatch({
            type: SHOW_DRAWER,
            payload: type,
            element: element,
            drawerLocation: drawerLocation
        });
    }

    document.body.classList.add("no-scroll");
};

export const hideDrawer = (success) => async (
    dispatch,
    getState,
    api
) => {
    dispatch({
        type: HIDE_DRAWER
    });

    if (success) {
        success();
    }
    document.body.classList.remove("no-scroll");
};

