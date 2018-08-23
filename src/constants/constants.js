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

// Blue color for App:
export const blue = '#2196f3';