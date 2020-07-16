import * as React from "react";
import {connect} from "react-redux";
import {updateUploadPopupFlag} from "../store/actions/actions";
import {getImagesArr} from "../store/reducer/imagesReducer";
import {ImageModel} from "../store/models/ImageModel";
import Button from "../components/Button";
import ImageContainer from "./image/ImagePreview";

interface ImagesContainerProps {
  openUploadImageDialog: () => void;
  imagesArr: ImageModel[];
}

const ImagesContainer: React.FC<ImagesContainerProps> = (props) => {
  const {imagesArr} = props;
  const emptyMessage = <div className={"Label"}>No images found</div>;
  return (
    <div className={"ImagesContainer"}>
      <div className={"Header"}>
        <h1>Image manager</h1>
        <Button label={"+ Add view"} type={"primary"} onClick={props.openUploadImageDialog}/>
      </div>
      <div className={"ImagesContainer__content"}>
        {imagesArr.length > 0 ?
          imagesArr.map((img, index) => <ImageContainer image={img} key={index}/>)
          :
          emptyMessage
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  imagesArr: getImagesArr(state)
});

const mapDispatchToProps = (dispatch) => ({
  openUploadImageDialog: () => dispatch(updateUploadPopupFlag(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
