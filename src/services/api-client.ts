import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'8fba07fe96684264ad32c98d31aead6d',
    }
})