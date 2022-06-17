import axios from 'axios';


export default class ListingService {
    
    getListingsAll() {
        return axios.get('http://localhost:5200/listings/all');
    }

    getListingById(listingId) {
        return axios.get(`http://localhost:5200/listings/${listingId}`);
    }
}