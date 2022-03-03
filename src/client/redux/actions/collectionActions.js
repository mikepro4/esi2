import moment from "moment";
import * as _ from "lodash";
import qs from "qs";
import axios from "axios";
import update from "immutability-helper";

// ===========================================================================

export const createCollection = (collectionItem, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/collections/create", collectionItem)
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
            
        });
}

// ===========================================================================

export const loadCollection = (id, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/collections/item", { collectionId: id })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}

// ===========================================================================


export const searchCollections = (type, identifier, offset, limit, query, success) => async (
    dispatch,
	getState,
	api
) => {
    let criteria = {}

    await api
        .post("/collections/search", {
            criteria: criteria,
            sortProperty: "createdAt",
            offset: offset,
            limit: limit,
            order: "-1"
        })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}

// ===========================================================================


export const deleteCollection = (collectionId, success) => async (
    dispatch,
	getState,
	api
) => {
    await api
        .post("/collections/delete", { collectionId: collectionId })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}

// ===========================================================================


export const updateCollectionDetails = (collection, data, success) => async (
    dispatch,
	getState,
	api
) => {

    let newMetadata = {
        ...collection.metadata,
        ...data
    }

    await api
        .post("/collection/update", { 
            collectionId: collection._id, 
            metadata: newMetadata,
        })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}


