import * as _ from "lodash";
import update from "immutability-helper";

import {
    UPDATE_TOTAL_PIXELS,
	UPDATE_TOTAL_SCROLLED_PIXELS,
    UPDATE_COLLECTION,
    SHOW_DRAWER,
    HIDE_DRAWER,
    UPDATE_COLLECTION_ITEM,
} from "../actions/types";

export const initialState = {
    totalPixels: 0,
	clientWidth: 0,
	clientHeight: 0,
	totalScrolledPixels: 0,
	scrollTo: null,
    updateCollection: false,
    updateCollectionItem: null,
    drawerOpen: false,
    drawerType: null,
    drawerData: {},
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
        case UPDATE_TOTAL_PIXELS:
            return {
                ...state,
                totalPixels: action.total,
                clientWidth: action.clientWidth,
                clientHeight: action.clientHeight
            } ;
        case UPDATE_TOTAL_SCROLLED_PIXELS:
            return {
                ...state,
                totalScrolledPixels: action.pixels
            };
        case UPDATE_COLLECTION:
            return {
                ...state,
                updateCollection: action.payload
            };
        case UPDATE_COLLECTION_ITEM:
            return {
                ...state,
                updateCollectionItem: action.payload
            };
        case SHOW_DRAWER:
            let drawer

            if(action.drawerData) {
                drawer = action.drawerData
            } else {
                drawer = state.drawerData
            }

            return {
                ...state,
                drawerOpen: true,
                drawerType: action.payload,
                drawerData: drawer,
            }
        case HIDE_DRAWER:
            return {
                ...state,
                drawerOpen: false,
                drawerType: null,
                drawerData: null,
            }
		default:
			return state;
	}
};

