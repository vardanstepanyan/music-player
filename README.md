# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads the app dependency packages.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### State Management

Used React Context API for state management.

### Additional Features

Used setInterval for implementing the upload process.

Used useRef to get uploaded file details (song name/artist name).

Added an additional component named "Menu," which includes PlayAllButton, AddAllButton, TrackNumberButton, SearchTrack components.

### Upload File Format

Users can upload only files with .mp3 and .wav formats, and music names should be in the following format: Artist Name - Song Name (.extension). The artist's name should be in the first place, followed by the song name separated with a minus sign.
