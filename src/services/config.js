const devBaseURL = "https://123.207.32.32:9001";
// "https://httpbin.org";
// "https://123.207.32.32:9001";
const proBaseURL = "https://production.org";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
