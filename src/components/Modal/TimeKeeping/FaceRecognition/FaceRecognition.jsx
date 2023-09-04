import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import Tippy from '@tippyjs/react';
import { BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '~/assets/images';
import { updateSuccess } from '~/redux/Slice/authSlice';
import { createAxios } from '~/services/axiosClient';
import Modal from '../../Modal';
import styles from './FaceRecognition.module.scss';

const cx = classNames.bind(styles);

function FaceRecognition({ show, title, setShowFaceRecognitionModal }) {
  let faceioInstance = null;
  const { currentUser } = useSelector((state) => state.auth.login);
  const { _id, accessToken } = currentUser;
  const dispatch = useDispatch();
  let axiosJWT = createAxios(currentUser, dispatch, updateSuccess);

  useEffect(() => {
    const faceIoScript = document.createElement('script');
    faceIoScript.src = '//cdn.faceio.net/fio.js';
    faceIoScript.async = true;
    faceIoScript.onload = () => faceIoScriptLoaded();
    document.body.appendChild(faceIoScript);

    return () => {
      document.body.removeChild(faceIoScript);
    };
  }, []);

  const faceIoScriptLoaded = () => {
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('fioad997');
    }
  };

  const closeModal = () => {
    // dispatch(setFaceRecognitionModalIsOpen(false));
    setShowFaceRecognitionModal(false);
    window.location.reload();
  };

  const faceRegistration = async () => {
    try {
      console.log('ok');

      const userInfo = await faceioInstance.enroll({
        locate: 'auto',
        payload: {
          company: 'minato corporation',
          desc: 'faceRecognition',
        },
      });
      const data = { _id: _id, faceId: userInfo.facialId };
      console.log(data);
      // updateUserFaceId(data, _id, dispatch, accessToken, axiosJWT);
      // window.location.reload();
    } catch (errorCode) {
      console.log('error');
      handleError(errorCode);
      // dispatch(setFaceRecognitionModalIsOpen(false));
      // window.location.reload();
    }
  };

  const faceRecognition = async () => {
    try {
      // console.log(faceioInstance);
      const userData = await faceioInstance.authenticate({
        locate: 'auto',
      });
      if (faceId) {
        if (userData.facialId === faceId) return console.log('ok');
      }
      window.location.reload();
    } catch (errorCode) {
      handleError(errorCode);
      window.location.reload();
    }
  };

  const handleError = (errCode) => {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    switch (errCode) {
      case fioErrCode.PERMISSION_REFUSED:
        console.log('Access to the Camera stream was denied by the end user');
        break;
      case fioErrCode.NO_FACES_DETECTED:
        console.log('No faces were detected during the enroll or authentication process');
        break;
      case fioErrCode.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index");
        break;
      case fioErrCode.MANY_FACES:
        console.log('Two or more faces were detected during the scan process');
        break;
      case fioErrCode.PAD_ATTACK:
        console.log('Presentation (Spoof) Attack (PAD) detected during the scan process');
        break;
      case fioErrCode.FACE_MISMATCH:
        console.log('Calculated Facial Vectors of the user being enrolled do not matches');
        break;
      case fioErrCode.WRONG_PIN_CODE:
        console.log('Wrong PIN code supplied by the user being authenticated');
        break;
      case fioErrCode.PROCESSING_ERR:
        console.log('Server side error');
        break;
      case fioErrCode.UNAUTHORIZED:
        console.log(
          'Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information',
        );
        break;
      case fioErrCode.TERMS_NOT_ACCEPTED:
        console.log('Terms & Conditions set out by FACEIO/host application rejected by the end user');
        break;
      case fioErrCode.UI_NOT_READY:
        console.log('The FACEIO Widget could not be (or is being) injected onto the client DOM');
        break;
      case fioErrCode.SESSION_EXPIRED:
        console.log(
          'Client session expired. The first promise was already fulfilled but the host application failed to act accordingly',
        );
        break;
      case fioErrCode.TIMEOUT:
        console.log(
          'Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)',
        );
        break;
      case fioErrCode.TOO_MANY_REQUESTS:
        console.log(
          'Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications',
        );
        break;
      case fioErrCode.EMPTY_ORIGIN:
        console.log('Origin or Referer HTTP request header is empty or missing');
        break;
      case fioErrCode.FORBIDDDEN_ORIGIN:
        console.log('Domain origin is forbidden from instantiating fio.js');
        break;
      case fioErrCode.FORBIDDDEN_COUNTRY:
        console.log('Country ISO-3166-1 Code is forbidden from instantiating fio.js');
        break;
      case fioErrCode.SESSION_IN_PROGRESS:
        console.log('Another authentication or enrollment session is in progress');
        break;
      case fioErrCode.NETWORK_IO:
      default:
        console.log('Error while establishing network connection with the target FACEIO processing node');
        break;
    }
  };

  if (show) {
    return (
      <Modal>
        <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
          <header className={cx('header')}>
            <span className={cx('title')}>{title}</span>
            <div>
              <Tippy delay={[0, 20]} interactive content="Close">
                <button className={cx('close-btn')} onClick={closeModal}>
                  <BsXLg />
                </button>
              </Tippy>
            </div>
          </header>
          <div className={cx('container')}>
            <div className={cx('content')}>
              <img src={images.faceRecognition} alt="faceRecognition" />
            </div>
            <button
              className={cx('recognition-btn')}
              onClick={title === 'Sign up' ? faceRegistration : faceRecognition}
            >
              Face Recognition
            </button>
          </div>
        </motion.div>
      </Modal>
    );
  }
}

export default FaceRecognition;
