import * as Actions from "./actionTypes";

export const updateGlobalLoadingFlag = (props) => ({
  type: Actions.UPDATE_GLOBAL_LOADING_FLAG,
  props
});

export const updateDetailsPopupFlag = (props) => ({
  type: Actions.UPDATE_DETAILS_POPUP_FLAG,
  props
});

export const updateUploadPopupFlag = (props) => ({
  type: Actions.UPDATE_UPLOAD_POPUP_FLAG,
  props
});

export const updateImageDetailsInPopup = (props) => ({
  type: Actions.MODIFY_IMAGE_DETAILS,
  props
});

export const updateModifyPopupFlag = (props) => ({
  type: Actions.UPDATE_MODIFY_POPUP_FLAG,
  props
});

export const seeImageDetailsInPopup = (props) => ({
  type: Actions.SEE_IMAGE_DETAILS,
  props
});

export const updateImagesFromServer = (props) => ({
  type: Actions.UPDATE_IMAGES_FROM_SERVER,
  props
});

export const updateDetails = (props) => ({
  type: Actions.UPDATE_IMAGE_DETAILS,
  props
});

export const deleteImageAction = (props) => ({
  type: Actions.DELETE_IMAGE,
  props
});