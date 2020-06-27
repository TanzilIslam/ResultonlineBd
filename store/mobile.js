import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    MobileArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_MOBILE_ARTICLES(state, payload) {
        state.MobileArticles = payload
    },
    SET_MORE_MOBILE_ARTICLES(state, payload) {
        state.MobileArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },

    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.MobileArticles.push(payload)
    }
}

export const actions = {

    FetchMobileArticles({ commit }, posts) {
        commit('SET_MOBILE_ARTICLES', posts)
    },
    FetchMoreMobileArticles({ commit, rootState }) {
        return ApiService.GetMoreMobileArticles(rootState.mobile.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_MOBILE_ARTICLES', element)
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
