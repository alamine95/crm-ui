import axios from "axios";

const CATALOGUE_API_BASE_URI = "http://localhost:3001/api/v1/categories";

class CatalogueService{
    saveCatalogue(catalogue){
        return axios.post(CATALOGUE_API_BASE_URI, catalogue);
    }

    getCatalogues(){
        return axios.get(CATALOGUE_API_BASE_URI);
    }

    getCatalogueById(id){
        return axios.get(CATALOGUE_API_BASE_URI + "/" +id);
    }

    updateCatalogue(catalogue, id){
        return axios.post(CATALOGUE_API_BASE_URI + "/" +id, catalogue);
    }

    deleteCatalogue(id){
        return axios.delete(CATALOGUE_API_BASE_URI + "/" +id);
    }
}

export default new CatalogueService();