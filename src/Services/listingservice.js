import axios from 'axios';


export default class ListingService {
    
    getListingsAll() {
        return axios.get('http://107.21.89.197:80/listings/all');
    }

    getListingById(listingId) {
        return axios.get(`http://107.21.89.197:80/listings/${listingId}`);
    }
}