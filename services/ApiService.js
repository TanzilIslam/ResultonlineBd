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

    GetMoreHomeArticles(pageNumber) {
        return apiClient.get('/?page=' + pageNumber)
    },
    GetMoreTopArticles(pageNumber) {
        return apiClient.get('/TopContent?page=' + pageNumber)
    },

    GetAuthorArticles(authorName) {
        return apiClient.get('/channel/' + authorName)
    },

    GetDetailArticle(slug) {
        return apiClient.get('/details/' + slug)
    },
    GetMoreProgrammingArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Programming')
    },


}
