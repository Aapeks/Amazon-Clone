import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-6d255.cloudfunctions.net/api"
    
//     "http://localhost:5001/clone-6d255/us-central1/api" //the API (cloud function) url
});

export default instance;