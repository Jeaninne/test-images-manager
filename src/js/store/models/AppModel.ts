import {ImageModel} from "./ImageModel";

export class AppInfoModel {
  showUploadPopup: boolean;
  showDetailsPopup: boolean;
  showModifyPopup: boolean;
  selectedImage: ImageModel;
  isAppLoading: boolean;

  constructor(showUploadPopup?, showDetailsPopup?, showModifyPopup?, selectedImage?, isAppLoading?) {
    this.showUploadPopup = showUploadPopup || false;
    this.showDetailsPopup = showDetailsPopup || false;
    this.showModifyPopup = showModifyPopup || false;
    this.selectedImage = selectedImage;
    this.isAppLoading = isAppLoading || false;
  }

  // Setters
  withUpdatedUploadPopupFlag(showUploadPopup) {
    return new AppInfoModel(showUploadPopup);
  }

  withUpdatedDetailsPopupFlag(showDetailsPopup) {
    return new AppInfoModel(false, showDetailsPopup);
  }

  withUpdatedModifyPopupFlag(showModifyPopup) {
    return new AppInfoModel(false, false, showModifyPopup);
  }

  withUpdatedImageToModify(selectedImage) {
    return new AppInfoModel(false, false, true, selectedImage);
  }

  withUpdatedDetailsImage(selectedImage) {
    return new AppInfoModel( false, true,false, selectedImage);
  }

  withUpdatedAppLoadingFlag(isAppLoading) {
    return new AppInfoModel( false, false,false, undefined, isAppLoading);
  }

  // Getters
  get uploadPopupFlag(): boolean {
    return this.showUploadPopup;
  }

  get detailsPopupFlag(): boolean {
    return this.showDetailsPopup;
  }

  get modifyPopupFlag(): boolean {
    return this.showModifyPopup;
  }

  get selectedImageInfo(): ImageModel {
    return this.selectedImage;
  }

  get appLoadingFlag(): boolean {
    return this.isAppLoading;
  }
}
