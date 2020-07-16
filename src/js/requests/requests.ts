import {
  deleteImageAction,
  updateDetails,
  updateGlobalLoadingFlag,
  updateImagesFromServer,
  updateModifyPopupFlag,
  updateUploadPopupFlag
} from "../store/actions/actions";
import {getImagesArr} from "../store/reducer/imagesReducer";
import {ImageModel} from "../store/models/ImageModel";
import {ImageDetailsModel, ImageDetailsType} from "../store/models/ImageDetailsModel";
import * as mockData from "../../mock/mock.json";

export function getInitialData() {
  return (dispatch) => {
    dispatch(updateGlobalLoadingFlag(true));
    setTimeout(() => {
      const data = mockData.data.map(img => {
        const obj: ImageDetailsType = JSON.parse(JSON.stringify(img)); // converter magic
        return new ImageModel({src: img.src}, new ImageDetailsModel(obj))
      });
      dispatch(updateImagesFromServer(data));
      dispatch(updateGlobalLoadingFlag(false));
    }, 3000)
  }
}

export function uploadNewImage(newImage: ImageModel) {
  return (dispatch, getState) => {
    dispatch(updateUploadPopupFlag(false));
    // emulate sending request and get back updated data
    const id = Math.random().toString(36).substr(2, 9); // generate id
    const nextDetails = new ImageDetailsModel({...newImage.details, id});
    const prevData = getImagesArr(getState());

    const nextImage = new ImageModel({src: URL.createObjectURL(newImage.view)}, nextDetails);
    dispatch(updateImagesFromServer([...prevData, nextImage]));
  }
}

export function updateImageDetails(nextImageDetails: ImageDetailsModel) {
  return (dispatch) => {
    // emulate sending request and get back success status
    dispatch(updateDetails(nextImageDetails));
    dispatch(updateModifyPopupFlag(false));
  }
}

export function deleteImage(deleteImageId: string) {
  return (dispatch) => {
    dispatch(updateModifyPopupFlag(false));
    // emulate sending request and get back success status
    dispatch(deleteImageAction(deleteImageId));
  }
}