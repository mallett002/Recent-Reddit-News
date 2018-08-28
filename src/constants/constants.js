// function that gets corresponding news category endpoint
export const getEndpoint = (category) => {
    switch(category) {
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
    if (upper === 'USNEWS') return '#2196f3';
    if (upper === 'SPORTS') return '#e29f30';
    if (upper === 'POLITICS') return '#70ab70';
    if (upper === 'UPLIFTING') return '#ad5454';
};

// returns a date string like "Aug 28"
export const getDate = (seconds) => {
    const ms = seconds * 1000;
    const date = new Date(ms);
    const timeString = date.toUTCString();
    const timeArray = timeString.split(" ").slice(0, 3);
    return `${timeArray[2]} ${timeArray[1]}`;
}


