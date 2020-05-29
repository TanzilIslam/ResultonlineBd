import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    DetailArticle: {},
    PageNumber: 2,
    PageNumberTop: 2,
    RelatedArticles: [],
    TopArticles: []
})

export const mutations = {
    SET_RELATED_ARTICLES(state, payload) {
        state.RelatedArticles = payload
    },
    SET_TOP_ARTICLES(state, payload) {
        state.TopArticles = payload
    },
    SET_MORE_TOP_ARTICLES(state, payload) {
        state.TopArticles.push(payload)
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

    FetchRelatedArticles({ commit }, posts) {
        commit('SET_RELATED_ARTICLES', posts)
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
