import axios from 'axios';

// const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const KEY = "AIzaSyBcWWvEukJlvFcfE8WZrw4wzX6mEGXAu8Q";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: KEY
    }
});