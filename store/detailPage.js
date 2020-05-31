import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    DetailArticle: {},
    PageNumber: 2,
    PageNumberRecommended: 2,
    PageNumberHighRated: 2,
    RelatedArticles: [],
    RecommendedArticles: [],
    HighRatedArticles: []
})

export const mutations = {
    SET_RELATED_ARTICLES(state, payload) {
        state.RelatedArticles = payload
    },
    SET_RECOMMENDED_ARTICLES(state, payload) {
        state.RecommendedArticles = payload
    },
    SET_HIGH_RATED_ARTICLES(state, payload) {
        state.HighRatedArticles = payload
    },
    SET_MORE_RECOMMENDED_ARTICLES(state, payload) {
        state.RecommendedArticles.push(payload)
    },
    SET_MORE_HIGH_RATED_ARTICLES(state, payload) {
        state.HighRatedArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER_RECOMMENDED(state) {
        state.PageNumberTop++;
    },
    INCREASE_PAGE_NUMBER_HIGH_RATED(state) {
        state.PageNumberHighRated++;
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

    FetchRecommendedArticles({ commit }, posts) {
        commit('SET_RECOMMENDED_ARTICLES', posts)
    },

    FetchHighRatedArticles({ commit }, posts) {
        commit('SET_HIGH_RATED_ARTICLES', posts)
    },

    FetchMoreRecommendedArticles({ commit, rootState }) {
        return ApiService.GetMoreRecommendedArticles(rootState.detailPage.PageNumberRecommended).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_RECOMMENDED_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER_RECOMMENDED')
        })
    },

    FetchMoreHighRatedArticles({ commit, rootState }) {
        return ApiService.GetMoreHighRatedArticles(rootState.detailPage.PageNumberHighRated).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HIGH_RATED_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER_HIGH_RATED')
        })
    },
    FetchDetailArticle({ commit }, posts) {
        commit('SET_DETAIL_ARTICLE', posts)
    }
}
