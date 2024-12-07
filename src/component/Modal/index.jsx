import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import close_btn from "../../assets/close.png";
// import AddSubject_btn from "../../assets/images/plus-circle.svg";
import classes from "./ModalStyles.module.css";
import PropTypes from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

const Modal = ({ closeModal, isopen, title, subtitle, modalContent, modalFooter }) => {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={isopen}
      >
        <div className={`${classes.modalpopup}`}>
          <div className={`${classes.modalinfo}`}>
            <div className={`${classes.sticky}`}>
              <div className={classes.modalheadcontainer}>
                <div className={`${classes.addclassheader}`}>
                  <h4 className={classes.modaltitle}>{title}</h4>
                  <img
                    onClick={closeModal}
                    src={close_btn}
                    alt=""
                  />
                </div>
              </div>
              <div className={`${classes.texttag}`}>
                {subtitle}
              </div>
            </div>
            <DialogContent className={`${classes.css1t1j96hMuiPaperrootMuiDialogpaper}`} dividers>
              {modalContent}
            </DialogContent>
            <div>
              {modalFooter}
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};

Modal.propTypes = {
    closeModal: PropTypes.bool,
    isopen: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    modalContent: PropTypes.string,
    modalFooter: PropTypes.string,
}

export default Modal;
