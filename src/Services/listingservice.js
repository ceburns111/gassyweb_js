import ax from "../helpers/axiosConfig"

export default class ListingService {
    
    getListingsAll() {
        return ax.get('http://localhost:5200/listings/all');
    }

    getListingById(listingId) {
        return ax.get(`http://localhost:5200/listings/${listingId}`);
    }
}