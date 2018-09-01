// function that gets corresponding news category endpoint
export const getEndpoint = (category) => {
    switch (category) {
        case 'uplifting':
            return 'UpliftingNews/hot/.json?raw_json=1';
        case 'sports':
            return 'sports/hot/.json?raw_json=1';
        case 'worldnews':
            return 'worldnews/hot/.json?raw_json=1';
        case 'politics':
            return 'politics/hot/.json?raw_json=1';
        default:
            return 'USNEWS/hot/.json?raw_json=1';
    }
};

export const getColor = (str) => {
    const upper = str.toUpperCase();
    if (upper === 'WORLDNEWS') return '#DE7A22';
    if (upper === 'SPORTS') return '#F4CC70';
    if (upper === 'POLITICS') return '#6AB187';
    if (upper === 'UPLIFTINGNEWS') return '#20948B';
};

// returns a date string like "Aug 28"
export const getDate = (seconds) => {
    const ms = seconds * 1000;
    const date = new Date(ms);
    const timeString = date.toUTCString();
    const timeArray = timeString.split(" ").slice(0, 3);
    return `${timeArray[2]} ${timeArray[1]}`;
}

// gets the video url or returns false
export const getVid = (item) => {
    if (item.hasOwnProperty("media") && item.media !== null
        && item.media.hasOwnProperty("reddit_video")
        && item.media.reddit_video !== undefined) {
        return item.media.reddit_video.scrubber_media_url;

    } else if (item.hasOwnProperty("preview") && item.preview.hasOwnProperty("reddit_video_preview")
        && item.preview.reddit_video_preview.scrubber_media_url !== undefined) {
        return item.preview.reddit_video_preview.scrubber_media_url;

    } else if (item.hasOwnProperty("secure_media") && item.secure_media !== null
        && item.secure_media.hasOwnProperty("reddit_video")
        && item.secure_media.reddit_video !== undefined) {
        return item.secure_media.reddit_video.scrubber_media_url;
    } else {
        return false;
    }
}
