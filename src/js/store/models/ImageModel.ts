import {ImageDetailsModel} from "./ImageDetailsModel";

export class ImageModel {
  view: any;
  details: ImageDetailsModel;

  constructor(view, details = new ImageDetailsModel()) {
    this.view = view;
    this.details = details;
  }
}