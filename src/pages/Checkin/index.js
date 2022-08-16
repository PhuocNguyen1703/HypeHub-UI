import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

function Checkin() {
    const webcamRef = useRef(null);

    useEffect(() => {
        // if (navigator.mediaDevices.getUserMedia) {
        //     navigator.mediaDevices.getUserMedia({ video: {} }).then((stream) => {
        //         webcamRef.current.srcObject = stream;
        //     });
        // }
    }, []);

    return (
        <div>
            <video autoPlay ref={webcamRef} muted></video>
        </div>
    );
}

export default Checkin;
