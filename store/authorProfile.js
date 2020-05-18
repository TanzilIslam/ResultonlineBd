import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    AuthorArticles: [],
})

export const mutations = {
    SET_AUTHOR_ARTICLES(state, payload) {
        state.AuthorArticles = payload
    }
}

export const actions = {
    FetchAuthorArticles({ commit }, authorName) {
        return ApiService.GetAuthorArticles(authorName).then(response => {
            commit('SET_AUTHOR_ARTICLES', response.data)
        })

    }
}
