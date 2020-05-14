import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://cdn.resultonlinebd.com`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getHomeCards() {
        return apiClient.get('/')
    },
	
    getdetailsCard(slug) {
        return apiClient.get('/details/' + slug)
    },
    
    getauthorprofile(authorName){
    	return apiClient.get('/channel/' + authorName)
    },
    getProgrammingPosts() {
        return apiClient.get('/')
    },

}
