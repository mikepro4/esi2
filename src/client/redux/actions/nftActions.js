import moment from "moment";
import * as _ from "lodash";
import qs from "qs";
import axios from "axios";
import update from "immutability-helper";

import Web3Modal from "web3modal";

import {
    nftAddress, nftMarketAddress
} from "../../../../config";

import { ethers } from "ethers";

import { updateCollection } from "./appActions"


import {
    LOAD_NFT,
    CLEAR_NFT,
} from "./types";

export const updateNFTCollection = (nftId, collectionId, success) => async (
    dispatch,
	getState,
	api
) => {
        await api
            .post("/NFT/updateCollection", { 
                nftId: nftId, 
                collectionId: collectionId
            })
            .then(response => {
                dispatch(updateCollection(true));
                if (success) {
                    success(response.data);
                }
            })
            .catch(() => {
            });

}

// ===========================================================================

export const getMultiple = (nfts, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/NFTs/getMultiple", { nfts: nfts})
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
            // dispatch(authError('Account with this email already exists'));
        });
}

// ===========================================================================



export const updateNFTImage = (nftId, fileUrl, success) => async (
    dispatch,
	getState,
	api
) => {
        await api
            .post("/NFT/updateImage", { 
                nftId: nftId, 
                fileUrl: fileUrl
            })
            .then(response => {
                dispatch(loadNFT(nftId, (data) => {}));
                if (success) {
                    success(response.data);
                }
            })
            .catch(() => {
            });

}

// ===========================================================================

export const createNFT = (NFTItem, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/NFTs/create", NFTItem)
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
            
        });
}

// ===========================================================================



export const loadNFT = (id, success) => async (
    dispatch,
	getState,
	api
) => {

   

    await api
        .post("/NFTs/item", { NFTId: id })
        .then(response => {
            if (success) {
                success(response.data);
            }

            dispatch({
                type: LOAD_NFT,
                payload: response.data
            });

        })
        .catch(() => {
            // dispatch(authError('Account with this email already exists'));
        });
}

// ===========================================================================



export const loadNFTandShape = (id, success) => async (
    dispatch,
	getState,
	api
) => {

   

    await api
        .post("/NFT/load", { NFTid: id })
        .then(response => {
            if (success) {
                success(response.data);
            }

            dispatch({
                type: LOAD_NFT,
                payload: response.data.nft
            });

            dispatch({
                type: LOAD_SHAPE,
                payload: response.data.shape
            });

        })
        .catch(() => {
            // dispatch(authError('Account with this email already exists'));
        });
}

// ===========================================================================


export const loadNFTDetails = (id, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/NFTs/item", { NFTId: id })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
            // dispatch(authError('Account with this email already exists'));
        });
}


// ===========================================================================


export const searchNFTs = (type, identifier, offset, limit, query, success) => async (
    dispatch,
	getState,
	api
) => {
    let criteria = {}
    let sortProperty = "createdAt"
    let sortDirection = "-1"

    // let draft = getState().app.draft

    if(type == "collection") {
        criteria = {
            collectionId: query.collectionId
        }
    }

    await api
        .post("/NFTs/search", {
            criteria: criteria,
            sortProperty:sortProperty,
            offset: offset,
            limit: limit,
            order: sortDirection,
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


export const clearNFT = (success) => async (
    dispatch,
	getState,
	api
) => {

    dispatch({
        type: CLEAR_NFT
    });
}

// ===========================================================================
