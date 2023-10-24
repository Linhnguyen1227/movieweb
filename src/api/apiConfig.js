const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: '08ad4d4a78f38c211289d8c8ac771d80',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
