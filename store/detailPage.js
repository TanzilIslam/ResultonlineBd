import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    DetailArticle: {},
    PageNumberHome: 2,
    PageNumberTop: 2,
    HomeArticles: [],
    TopArticles: []
})

export const mutations = {
    SET_HOME_ARTICLES(state, payload) {
        state.HomeArticles = payload
    },
    SET_MORE_HOME_ARTICLES(state, payload) {
        state.HomeArticles.push(payload)
    },
    SET_TOP_ARTICLES(state, payload) {
        state.TopArticles = payload
    },
    SET_MORE_TOP_ARTICLES(state, payload) {
        state.TopArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER_HOME(state) {
        state.PageNumberHome++;
    },
    INCREASE_PAGE_NUMBER_TOP(state) {
        state.PageNumberTop++;
    },

    SET_DETAIL_ARTICLE(state, payload) {
        state.DetailArticle = payload

    },
}

export const actions = {

    // FetchDetailArticle({ commit }, slug) {
    //     return ApiService.GetDetailArticle(slug).then(response => {
    //         commit('SET_DETAIL_ARTICLE', response.data)
    //     })
    // },

    FetchHomeArticles({ commit }, posts) {
        commit('SET_HOME_ARTICLES', posts)
    },

    FetchMoreHomeArticles({ commit, rootState }) {
        return ApiService.GetMoreHomeArticles(rootState.detailPage.PageNumberHome).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HOME_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER_HOME')
        })
    },
    FetchTopArticles({ commit }, posts) {
        commit('SET_TOP_ARTICLES', posts)
    },
    FetchMoreTopArticles({ commit, rootState }) {
        return ApiService.GetMoreTopArticles(rootState.detailPage.PageNumberTop).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_TOP_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER_TOP')
        })
    },
    FetchDetailArticle({ commit }, posts) {
        commit('SET_DETAIL_ARTICLE', posts)
    }
}
