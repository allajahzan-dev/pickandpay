import BASE_URL from "@/constants/baseUrl";

// Interface for IReview
export interface IReview {
    id: number;
    name: string;
    review: string;
    image: string;
}

// Fetch reviews
export const fetchReviews = async (): Promise<{
    reviews: IReview[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/reviews.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read reviews:", err);
        return { reviews: [] };
    }
};
