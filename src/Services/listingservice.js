import axios from 'axios';


export default class ListingService {
    
    getListingsAll() {
        try {
            return axios.get('http://localhost:5200/listings/all');
        }
        catch (err) {
            console.error(err);
        }
    }

    getListingById(listingId) {
        try {
            return axios.get(`http://localhost:5200/listings/${listingId}`);
        }
        catch (err) {
            console.error(err);
        }
    }
}