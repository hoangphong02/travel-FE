import React from 'react';
import { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { ReactComponent as SuccessIcon } from '~/assets/images/iconography/Other/Check2.svg';
import {
  CSExclamationSolid,
  CSInfoSolid,
  CSMinusCircleSolid,
} from '~/components/iconography/Solid';

export const ToastSuccess = ({
  show = false,
  heading = '',
  content = '',
  button1Content = '',
  handleClickButton1 = () => {},
  button2Content = '',
  handleClickButton2 = () => {},
  theme = 'light',
  onHide = () => {},
  isLoading = false,
  headingLoading = '',
  contentLoading = '',
  timeClose = 5000,
}) => {
  const notify = () =>
    toast(
      <div>
        {heading && <h1>{heading}</h1>}
        {content && <p>{content}</p>}
        {(button1Content || button2Content) && (
          <div className="d-flex align-items-center" style={{ gap: '24px' }}>
            {button1Content && (
              <Button onClick={handleClickButton1}>{button1Content}</Button>
            )}
            {button2Content && (
              <Button onClick={handleClickButton2}>{button2Content}</Button>
            )}
          </div>
        )}
      </div>,
      {
        // position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        icon: <SuccessIcon />,
        theme,
        toastId: 'notify-success',
        onClose: onHide,
      },
    );

  const notifyLoading = () =>
    toast(
      <div>
        {headingLoading && <h1>{headingLoading}</h1>}
        {contentLoading && <p>{contentLoading}</p>}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        icon: <Spinner animation="border" />,
        theme,
        toastId: 'notify-success-loading',
      },
    );

  useEffect(() => {
    if (show) {
      if (isLoading) {
        notifyLoading();
      } else {
        notify();
      }
    }
  }, [show, isLoading]);

  return (
    <>
      {show && !isLoading && <ToastContainer className="toast-success" />}
      {isLoading && (
        <ToastContainer className="toast-success toast-loading toast-loading-success" />
      )}
    </>
  );
};

export const ToastError = ({
  show = false,
  heading = '',
  content = '',
  button1Content = '',
  handleClickButton1 = () => {},
  button2Content = '',
  handleClickButton2 = () => {},
  theme = 'light',
  onHide = () => {},
  isLoading = false,
  headingLoading = '',
  contentLoading = '',
  timeClose = 5000,
}) => {
  const notify = () =>
    toast(
      <div>
        {heading && <h1>{heading}</h1>}
        {content && <p>{content}</p>}
        {(button1Content || button2Content) && (
          <div className="d-flex align-items-center" style={{ gap: '24px' }}>
            {button1Content && (
              <Button onClick={handleClickButton1}>{button1Content}</Button>
            )}
            {button2Content && (
              <Button onClick={handleClickButton2}>{button2Content}</Button>
            )}
          </div>
        )}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        icon: <CSMinusCircleSolid customClassName="fill-red" />,
        theme,
        toastId: 'notify-error',
        onClose: onHide,
      },
    );

  const notifyLoading = () =>
    toast(
      <div>
        {headingLoading && <h1>{headingLoading}</h1>}
        {contentLoading && <p>{contentLoading}</p>}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        icon: <Spinner animation="border" />,
        theme,
        toastId: 'notify-error-loading',
      },
    );

  useEffect(() => {
    if (show) {
      if (isLoading) {
        notifyLoading();
      } else {
        notify();
      }
    }
  }, [show, isLoading]);

  return (
    <>
      {show && !isLoading && <ToastContainer className="toast-error" />}
      {isLoading && (
        <ToastContainer className="toast-error toast-loading toast-loading-error" />
      )}
    </>
  );
};

export const ToastWarning = ({
  show = false,
  heading = '',
  content = '',
  button1Content = '',
  handleClickButton1 = () => {},
  button2Content = '',
  handleClickButton2 = () => {},
  theme = 'light',
  onHide = () => {},
  isLoading = false,
  headingLoading = '',
  contentLoading = '',
  timeClose = 5000,
}) => {
  const notify = () =>
    toast(
      <div>
        {heading && <h1>{heading}</h1>}
        {content && <p>{content}</p>}
        {(button1Content || button2Content) && (
          <div className="d-flex align-items-center" style={{ gap: '24px' }}>
            {button1Content && (
              <Button onClick={handleClickButton1}>{button1Content}</Button>
            )}
            {button2Content && (
              <Button onClick={handleClickButton2}>{button2Content}</Button>
            )}
          </div>
        )}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        icon: <CSExclamationSolid customClassName="fill-orange" />,
        theme,
        toastId: 'notify-warning',
        onClose: onHide,
      },
    );

  const notifyLoading = () =>
    toast(
      <div>
        {headingLoading && <h1>{headingLoading}</h1>}
        {contentLoading && <p>{contentLoading}</p>}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        icon: <Spinner animation="border" />,
        theme,
        toastId: 'notify-warning-loading',
      },
    );

  useEffect(() => {
    if (show) {
      if (isLoading) {
        notifyLoading();
      } else {
        notify();
      }
    }
  }, [show, isLoading]);

  return (
    <>
      {show && !isLoading && <ToastContainer className="toast-warning" />}
      {isLoading && (
        <ToastContainer className="toast-warning toast-loading toast-loading-warning" />
      )}
    </>
  );
};

export const ToastInformational = ({
  show = false,
  heading = '',
  content = '',
  button1Content = '',
  handleClickButton1 = () => {},
  button2Content = '',
  handleClickButton2 = () => {},
  theme = 'light',
  onHide = () => {},
  isLoading = false,
  headingLoading = '',
  contentLoading = '',
  timeClose = 5000,
}) => {
  const notify = () =>
    toast(
      <div>
        {heading && <h1>{heading}</h1>}
        {content && <p>{content}</p>}
        {(button1Content || button2Content) && (
          <div className="d-flex align-items-center" style={{ gap: '24px' }}>
            {button1Content && (
              <Button onClick={handleClickButton1}>{button1Content}</Button>
            )}
            {button2Content && (
              <Button onClick={handleClickButton2}>{button2Content}</Button>
            )}
          </div>
        )}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        icon: <CSInfoSolid customClassName="fill-blue" />,
        theme,
        toastId: 'notify-informational',
        onClose: onHide,
      },
    );

  const notifyLoading = () =>
    toast(
      <div>
        {headingLoading && <h1>{headingLoading}</h1>}
        {contentLoading && <p>{contentLoading}</p>}
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        icon: <Spinner animation="border" />,
        theme,
        toastId: 'notify-informational-loading',
      },
    );

  useEffect(() => {
    if (show) {
      if (isLoading) {
        notifyLoading();
      } else {
        notify();
      }
    }
  }, [show, isLoading]);

  return (
    <>
      {show && !isLoading && <ToastContainer className="toast-informational" />}
      {isLoading && (
        <ToastContainer className="toast-informational toast-loading toast-loading-informational" />
      )}
    </>
  );
};
