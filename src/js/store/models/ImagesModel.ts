import {ImageModel} from "./ImageModel";
import {ImageDetailsModel} from "./ImageDetailsModel";

export class ImagesModel {
  imagesFromServer: ImageModel[];

  constructor(imagesFromServer?) {
    this.imagesFromServer = imagesFromServer || [];
  }

  // Setters
  withUpdatedImagesFromServer(imagesFromServer) {
    return new ImagesModel(imagesFromServer);
  }

  withUpdatedImageDetails(imageDetails: ImageDetailsModel) {
    const nextImagesArr = this.imagesFromServer
      .map(image => image.details.id === imageDetails.id ? new ImageModel(image.view, imageDetails) : image);
    return new ImagesModel(nextImagesArr);
  }

  withDeletedImages(imageToDeleteId: string) {
    const nextImagesArr = this.imagesFromServer
      .filter(image => image.details.id !== imageToDeleteId);
    return new ImagesModel(nextImagesArr);
  }

  // Getters
  get allImages(): ImageModel[] {
    return this.imagesFromServer;
  }
}
