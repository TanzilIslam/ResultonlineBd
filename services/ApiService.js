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
    GetMoreCelebrityArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Celebrity')
    },
    GetMoreIslamArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Islam')
    },
    GetMoreHistoryArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=History')
    },

    GetMoreHealthArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Health')
    },
    GetMoreTechnologyArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Technology')
    },

    GetMoreEducationArticles(pageNumber) {
        return apiClient.get('channeldel?page=' + pageNumber + '&search=Education')
    },
}
