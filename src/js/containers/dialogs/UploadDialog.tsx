import * as React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import Dialog from "../../components/Dialog";
import ImageForm from "../form/ImageForm";
import {uploadNewImage} from "../../requests/requests";
import {updateUploadPopupFlag} from "../../store/actions/actions";
import {ImageDetailsModel} from "../../store/models/ImageDetailsModel";
import {ImageModel} from "../../store/models/ImageModel";

export const ImageFullInfoContext = React.createContext({
  image: new ImageModel(undefined, new ImageDetailsModel()),
  setImage: (value) => { return; },
  setDetails: (value) => { return; }
});

const UploadDialog = (props) => {
  const [image, setNextImage] = useState(undefined);
  const [details, setNextDetails] = useState(new ImageDetailsModel());

  const setDetails = ({target}) => {
    setNextDetails({...details, [target.name]: target.value})
  };

  const handleSubmit = () => {
    props.submit(new ImageModel(image, details));
  };

  const imageFullInfo = {image: new ImageModel(image, details), setImage: setNextImage, setDetails};
  return (
    <ImageFullInfoContext.Provider value={imageFullInfo}>
      <Dialog header={"Upload new"}
              content={<ImageForm isNew/>}
              onCancel={props.cancel}
              onSubmit={handleSubmit}
              isSubmitDisabled={props.submitDisabled}
              submitButtonLabel={"Upload"}
      />
    </ImageFullInfoContext.Provider>
  )
};

const mapDispatchToProps = (dispatch) => ({
  cancel: () => dispatch(updateUploadPopupFlag(false)),
  submit: (image) => dispatch(uploadNewImage(image))
});

export default connect(null, mapDispatchToProps)(UploadDialog);