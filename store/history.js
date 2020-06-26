import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HistoryArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_HISTORY_ARTICLES(state, payload) {
        state.HistoryArticles = payload
    },
    SET_MORE_HISTORY_ARTICLES(state, payload) {
        state.HistoryArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.HistoryArticles.push(payload)
    }
}
export const actions = {

    FetchHistoryArticles({ commit }, posts) {
        commit('SET_HISTORY_ARTICLES', posts)
    },
    FetchMoreHistoryArticles({ commit, rootState }) {
        return ApiService.GetMoreHistoryArticles(rootState.history.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HISTORY_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
    SetTagNextDataLink({ commit }, posts) {
        commit('SET_TAG_NEXT_DATA_LINK', posts)
    },
    SetMoreTagArticles({ commit }, posts) {
        commit('SET_MORE_TAG_ARTICLES', posts)
    }
}
