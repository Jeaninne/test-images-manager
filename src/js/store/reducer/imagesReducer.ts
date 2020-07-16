import * as types from "../actions/actionTypes";
import {ImagesModel} from "../models/ImagesModel";

export default function imagesReducer(state = new ImagesModel(), action) {
  switch (action.type) {
    case types.UPDATE_IMAGES_FROM_SERVER:
      return state.withUpdatedImagesFromServer(action.props);
    case types.UPDATE_IMAGE_DETAILS:
      return state.withUpdatedImageDetails(action.props);
    case types.DELETE_IMAGE:
      return state.withDeletedImages(action.props);
    default:
      return state;
  }
}

export const getImagesArr = (state) => state.imagesData.allImages;