import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ConfirmationIcon from '~/assets/images/components/swal/confirm.svg';
import ErrorIcon from '~/assets/images/components/swal/error.svg';
import InfoIcon from '~/assets/images/components/swal/info.svg';
import SuccessIcon from '~/assets/images/components/swal/success.svg';

const MySwal = withReactContent(Swal);

export const swalPositiveConfirmation = (
  title,
  content,
  confirmButtonText,
  cancelButtonText,
  handlePreConfirm = () => {},
  handleWhenClose = () => {},
) =>
  MySwal.fire({
    title: <>{title}</>,
    html: <p>{content}</p>,
    customClass: {
      confirmButton: 'primary',
      cancelButton: 'primary-outline',
    },
    showCancelButton: cancelButtonText?.trim()?.length > 0,
    cancelButtonText,
    confirmButtonText,
    preConfirm: handlePreConfirm,
    iconHtml: <img src={ConfirmationIcon} alt="positive-confirmation-icon" />,
    allowOutsideClick: false,
  }).then((response) => {
    if (!response?.isConfirmed) {
      handleWhenClose();
    }
  });

export const swalNegativeConfirmation = (
  title,
  content,
  confirmButtonText,
  cancelButtonText,
  handlePreConfirm = () => {},
  handleWhenClose = () => {},
) =>
  MySwal.fire({
    title: <>{title}</>,
    html: <p>{content}</p>,
    customClass: {
      confirmButton: 'danger',
      cancelButton: 'danger-outline',
    },
    showCancelButton: cancelButtonText?.trim()?.length > 0,
    cancelButtonText,
    confirmButtonText,
    preConfirm: handlePreConfirm,
    iconHtml: <img src={ErrorIcon} alt="negative-confirmation-icon" />,
    allowOutsideClick: false,
  }).then((response) => {
    if (!response?.isConfirmed) {
      handleWhenClose();
    }
  });

export const swalSuccess = (
  title,
  content,
  confirmButtonText,
  handlePreConfirm = () => {},
  handleWhenClose = () => {},
) =>
  MySwal.fire({
    title: <>{title}</>,
    html: <p>{content}</p>,
    customClass: {
      confirmButton: 'primary',
    },
    showCancelButton: false,
    confirmButtonText,
    preConfirm: handlePreConfirm,
    iconHtml: <img src={SuccessIcon} alt="success-icon" />,
    allowOutsideClick: false,
  }).then((response) => {
    if (!response?.isConfirmed) {
      handleWhenClose();
    }
  });

export const swalError = (
  title,
  content,
  confirmButtonText,
  handlePreConfirm = () => {},
  handleWhenClose = () => {},
) =>
  MySwal.fire({
    title: <>{title}</>,
    html: <p>{content}</p>,
    customClass: {
      confirmButton: 'danger',
    },
    showCancelButton: false,
    confirmButtonText,
    preConfirm: handlePreConfirm,
    iconHtml: <img src={ErrorIcon} alt="error-icon" />,
    allowOutsideClick: false,
  }).then((response) => {
    if (!response?.isConfirmed) {
      handleWhenClose();
    }
  });

export const swalWarning = (
  title,
  content,
  confirmButtonText,
  cancelButtonText,
  handlePreConfirm = () => {},
  handleWhenClose = () => {},
) =>
  MySwal.fire({
    title: <>{title}</>,
    html: <p>{content}</p>,
    customClass: {
      confirmButton: 'warning',
      cancelButton: 'warning-outline',
    },
    showCancelButton: cancelButtonText?.trim()?.length > 0,
    cancelButtonText,
    confirmButtonText,
    preConfirm: handlePreConfirm,
    iconHtml: <img src={InfoIcon} alt="warning-icon" />,
    allowOutsideClick: false,
  }).then((response) => {
    if (!response?.isConfirmed) {
      handleWhenClose();
    }
  });
