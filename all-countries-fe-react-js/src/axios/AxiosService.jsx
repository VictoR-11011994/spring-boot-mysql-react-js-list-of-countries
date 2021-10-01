import axios from 'axios';

const countriesListUrl = "http://localhost:8080/countries/list";

class AxiosService {

    async getAllCountriesList() {
        return await axios.get(countriesListUrl);
    }
}

export default new AxiosService();