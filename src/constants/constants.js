// function that gets corresponding news category endpoint
export const getEndpoint = (category) => {
    switch(category) {
        case 'uplifting':
            return 'UpliftingNews/hot.json';
        case 'sports':
            return 'sports/hot.json';
        case 'usNews':
            return 'USNEWS/hot.json';
        case 'politics':
            return 'politics/hot.json';
        default: 
            return 'USNEWS/hot.json';
        }  
};

// Blue color for App:
export const blue = '#2196f3';