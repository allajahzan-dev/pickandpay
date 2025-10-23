// Base url
const BASE_URL: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://pickandpay.vercel.app";

export default BASE_URL;
