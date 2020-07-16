import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {GlobalLoader} from "../components/Loader";
import ImagesContainer from "./ImagesContainer";
import UploadDialog from "./dialogs/UploadDialog";
import DetailsDialog from "./dialogs/DetailsDialog";
import ModifyDialog from "./dialogs/ModifyDialog";
import {
  getAppLoadingFlag,
  getDetailsPopupFlag,
  getModifyPopupFlag,
  getUploadPopupFlag
} from "../store/reducer/appReducer";
import {getInitialData} from "../requests/requests";

interface MainViewProps {
  isAppLoading: boolean;
  showUploadDialog: boolean;
  showDetailsDialog: boolean;
  showModifyDialog: boolean;
  uploadInitialData: () => void;
}

const MainView: React.FC<MainViewProps> = (props) => {
  useEffect(() => {
    props.uploadInitialData();
  }, []);

  return (
    <div className={"AppView"}>
      {props.showUploadDialog && <UploadDialog/>}
      {props.showDetailsDialog && <DetailsDialog/>}
      {props.showModifyDialog && <ModifyDialog/>}
      {props.isAppLoading ? <GlobalLoader/> : <ImagesContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAppLoading: getAppLoadingFlag(state),
  showUploadDialog: getUploadPopupFlag(state),
  showDetailsDialog: getDetailsPopupFlag(state),
  showModifyDialog: getModifyPopupFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  uploadInitialData: () => dispatch(getInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
