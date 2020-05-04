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