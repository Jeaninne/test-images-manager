import {AppInfoModel} from "../models/AppModel";
import * as types from "../actions/actionTypes";

export default function appReducer(state = new AppInfoModel(), action) {
  switch (action.type) {
    case types.UPDATE_GLOBAL_LOADING_FLAG:
      return state.withUpdatedAppLoadingFlag(action.props);
    case types.UPDATE_DETAILS_POPUP_FLAG:
      return state.withUpdatedDetailsPopupFlag(action.props);
    case types.UPDATE_MODIFY_POPUP_FLAG:
      return state.withUpdatedModifyPopupFlag(action.props);
    case types.MODIFY_IMAGE_DETAILS:
      return state.withUpdatedImageToModify(action.props);
    case types.UPDATE_UPLOAD_POPUP_FLAG:
      return state.withUpdatedUploadPopupFlag(action.props);
    case types.SEE_IMAGE_DETAILS:
      return state.withUpdatedDetailsImage(action.props);
    default:
      return state;
  }
}

export const getUploadPopupFlag = (state) => state.appInfo.uploadPopupFlag;
export const getDetailsPopupFlag = (state) => state.appInfo.detailsPopupFlag;
export const getModifyPopupFlag = (state) => state.appInfo.modifyPopupFlag;
export const getSelectedImage = (state) => state.appInfo.selectedImageInfo;
export const getAppLoadingFlag = (state) => state.appInfo.appLoadingFlag;