import axios from 'axios';

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/home.json';
const apiKey = 'q8aLKvp0KGSscRni1OYxqdNmA8vujDhV';

export default {
    getMonthlyNews: (limit, callback) => {
        const url = apiUrl + '?api-key=' + apiKey;
        const apiCall = axios.create({
            baseURL: url,
            headers: {
                'content-type': 'application/json',
            },
        });
        apiCall.get(url).then((news) => {
            if (callback) {
                callback(news);
            }
        })
    }
}
