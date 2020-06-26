import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    TechnologyArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_TECHNOLOGY_ARTICLES(state, payload) {
        state.TechnologyArticles = payload
    },
    SET_MORE_TECHNOLOGY_ARTICLES(state, payload) {
        state.TechnologyArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.TechnologyArticles.push(payload)
    }
}
export const actions = {

    FetchTechnologyArticles({ commit }, posts) {
        commit('SET_TECHNOLOGY_ARTICLES', posts)
    },
    FetchMoreTechnologyArticles({ commit, rootState }) {
        return ApiService.GetMoreTechnologyArticles(rootState.technology.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_TECHNOLOGY_ARTICLES', element)
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
