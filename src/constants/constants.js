// function that gets corresponding news category endpoint
export const getEndpoint = (category) => {
    switch(category) {
        case 'uplifting':
            return 'UpliftingNews/hot/.json?raw_json=1';
        case 'sports':
            return 'sports/hot/.json?raw_json=1';
        case 'usNews':
            return 'USNEWS/hot/.json?raw_json=1';
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