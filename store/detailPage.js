import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    DetailArticle: {}
})

export const mutations = {
    SET_DETAIL_ARTICLE(state, payload) {
        state.DetailArticle = payload

    },
}

export const actions = {

    FetchDetailArticle({ commit }, slug) {
        return ApiService.GetDetailArticle(slug).then(response => {
            commit('SET_DETAIL_ARTICLE', response.data)
        })
    },
}
