[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/yliess86/FaceTool/blob/master/LICENSE)
[![NodeJS 14.1](https://img.shields.io/badge/nodejs-14.1.0-green.svg)](https://nodejs.org/en/)
[![Electron 8.2.5](https://img.shields.io/badge/electronjs-8.2.5-blue.svg)](https://www.electronjs.org/)

# FaceCapture: a Simple Facial Registration Capture App

![Logo](logo.png)

**FaceCapture** is a simple **facial registration** capture app. The app has been built to create a custom dataset for training **facial data driven models**. It consists of a **simple procedure** to follow. This procedure makes the user **follow a dot** with its **nose** in order to **capture** the face of the user in **different angles**. The resulting session is then **saved** as a **webm file** which can easily be converted to `mp4` and other formats using `ffmpeg` for example.

<p align="center">
    <img src="demo.gif">
<p>

> I know ... Two months without a haircut XD

## Install

The **installation** is straigforward and **requires npm**. The install process has been configure for **Linux only**, but you can easily **adapt** the `package.json` script for **other disctributions** or output format. By default, the distribution process will output an `AppImage` and a `deb` file.

```bash
$ npm install && npm run dist
```

## References

The tools has been built with **NodeJS** & **Electron**.