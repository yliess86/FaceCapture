'use strict';
const electron = require('electron');
const dialog = electron.remote.dialog;
const fs = require('fs');

const MIMETYPE = 'video/webm';

let recorder;
let buffer = [];

let video;
let recordButton;
let targetPoint;
let counter;

let initialize = () => {
    video = window.document.getElementById('dynamic-video');
    recordButton = window.document.getElementById('dynamic-record');
    targetPoint = window.document.getElementById('dynamic-target');
    counter = window.document.getElementById('dynamic-counter');

    let medias = { audio: false, video: { width: 1280, height: 720 } };
    let stream = (localMediaStream) => { video.srcObject = localMediaStream; };
    let error = (err) => { if(err) alert('Could not connect to Camera') };

    window.navigator.webkitGetUserMedia(medias, stream, error);
};

let count = (i, delay) => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            counter.innerHTML = i;
            resolve();
        }, delay * 1000);
    });
};

let saveBuffer = (path) => {
    let blob = new Blob(buffer, { type: MIMETYPE });
    let reader = new FileReader();
    reader.onload = () => {
        let binary = atob(reader.result.split(',')[1]);
        let data = [];
        
        for(let i = 0; i < binary.length; i++)
            data.push(binary.charCodeAt(i))
        let content = new Uint8Array(data);
        let error = (err) => { if(err) alter("Could not save Video"); };
        
        fs.writeFile(path, content, { type: MIMETYPE }, error);
        recorder = null;
        buffer = [];
    };
    reader.readAsDataURL(blob);
};

let saveRecord = () => {
    const opts = {
        title: 'Save Video', defaultPath: 'video.webm', buttonLabel: 'Save'
    };
    dialog.showSaveDialog(opts).then((res) => {
        if(res.filePath) saveBuffer(res.filePath);
    });
};

let stopRecord = () => {
    recorder.stop();

    recordButton.style.pointerEvents = 'all';
    recordButton.style.opacity = '1.0';
    recordButton.style.transform = 'scale(1.0)';
    
    targetPoint.style.opacity = "0";
    targetPoint.style.animationName = "none";
    targetPoint.style.animationDuration = "none";
    targetPoint.style.animationDelay = "none";
    targetPoint.style.animationTimingFunction = "none";
    targetPoint.style.animationDirection = "none";
    targetPoint.style.animationIterationCount = "none";
    
    saveRecord();
};

let startTarget = () => {
    recorder.start();

    targetPoint.style.opacity = "1";
    targetPoint.style.animationName = "xy_sequence, t_sequence, s_sequence, t_sequence";
    targetPoint.style.animationDuration = "10s, 1s, 5s, 1s";
    targetPoint.style.animationDelay = "1s, 11s, 12s, 17s";
    targetPoint.style.animationTimingFunction = "linear, linear, linear, linear";
    targetPoint.style.animationDirection = "normal, normal, normal, reverse";
    targetPoint.style.animationIterationCount = "1, 1, 1, 1";
    
    window.setTimeout(stopRecord, 20 * 1000);
};

let startRecord = () => {
    recordButton.style.pointerEvents = 'none';
    recordButton.style.opacity = '0.2';
    recordButton.style.transform = 'scale(0.8)';

    let record = (e) => { if(e.data.size > 0) buffer.push(e.data); };

    recorder = new MediaRecorder(video.srcObject, { mimeType: MIMETYPE });
    recorder.ondataavailable = record;

    count(3, 1)
        .then(() => count( 2, 1)
        .then(() => count( 1, 1)
        .then(() => count( 0, 1)
        .then(() => count("", 0)
        .then(() => startTarget())))));
};

window.onload = initialize;