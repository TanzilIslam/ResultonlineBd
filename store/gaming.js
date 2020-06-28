import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    GamingArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_GAMING_ARTICLES(state, payload) {
        state.GamingArticles = payload
    },
    SET_MORE_GAMING_ARTICLES(state, payload) {
        state.GamingArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },

    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.GamingArticles.push(payload)
    }
}

export const actions = {

    FetchGamingArticles({ commit }, posts) {
        commit('SET_GAMING_ARTICLES', posts)
    },
    FetchMoreGamingArticles({ commit, rootState }) {
        return ApiService.GetMoreGamingArticles(rootState.gaming.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_GAMING_ARTICLES', element)
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
