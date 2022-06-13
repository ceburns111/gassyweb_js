import axios from 'axios';


export default class ListingService {
    
    getListingsAll() {
        return axios.get('http://localhost:5200/ReverbListings/All');
    }

    getListingById(listingId) {
        return axios.get(`http://localhost:5200/ReverbListings/${listingId}`);
    }
}