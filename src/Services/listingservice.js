import axios from 'axios';
const baseUrl = `${import.meta.env.VITE_GASSY_URL}/listings`;

export default class ListingService {
    
    getListingsAll() {
        return axios.get(`${baseUrl}/all`);
    }

    getListingById(listingId) {
        return axios.get(`${baseUrl}/${listingId}`);
    }
}