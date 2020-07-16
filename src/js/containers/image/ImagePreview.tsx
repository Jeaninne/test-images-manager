import * as React from "react";
import {connect} from "react-redux";
import {ImageModel} from "../../store/models/ImageModel";
import {seeImageDetailsInPopup, updateImageDetailsInPopup} from "../../store/actions/actions";

interface ImageContainerProps {
  image: ImageModel;
  seeDetails: (image: ImageModel) => void;
  editImage: (image: ImageModel) => void;
}

const ImagePreview: React.FC<ImageContainerProps> = (props) => {
  const editImageInfo = (e) => {
    e.stopPropagation();
    props.editImage(props.image);
  };

  return (
    <div className={"PreviewImage"} onClick={() => props.seeDetails(props.image)}>
      <img src={props.image.view.src} className={"PreviewImage__view"}/>
      <label className={"PreviewImage__edit"} onClick={editImageInfo}>edit</label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  seeDetails: (image) => dispatch(seeImageDetailsInPopup(image)),
  editImage: (image) => dispatch(updateImageDetailsInPopup(image))
});

export default connect(null, mapDispatchToProps)(ImagePreview);
