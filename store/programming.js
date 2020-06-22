import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    ProgrammingArticles: [],
    SubArticles: []
})

export const mutations = {
    SET_PROGRAMMING_ARTICLES(state, payload) {
        state.ProgrammingArticles = payload
    },
    SET_MORE_PROGRAMMING_ARTICLES(state, payload) {
        state.ProgrammingArticles.push(payload)
    },

    SET_SUB_ARTICLES(state, payload) {
        state.SubArticles = payload
    },
    SET_MORE_SUB_ARTICLES(state, payload) {
        state.SubArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_SUB_MORE_ARTICLES(state, payload) {
        state.ProgrammingArticles.push(payload)
    }
}

export const actions = {

    FetchProgrammingArticles({ commit }, posts) {
        commit('SET_PROGRAMMING_ARTICLES', posts)
    },
    FetchMoreProgrammingArticles({ commit, rootState }) {
        return ApiService.GetMoreProgrammingArticles(rootState.programming.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_PROGRAMMING_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },

    FetchSubArticles({ commit }, posts) {
        commit('SET_SUB_ARTICLES', posts)
    },
    SetSubMoreArticles({ commit }, posts) {
        commit('SET_SUB_MORE_ARTICLES', posts)
    }
}
