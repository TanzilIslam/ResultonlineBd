import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    ProgrammingArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_PROGRAMMING_ARTICLES(state, payload) {
        state.ProgrammingArticles = payload
    },
    SET_MORE_PROGRAMMING_ARTICLES(state, payload) {
        state.ProgrammingArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },

    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
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

    SetTagNextDataLink({ commit }, posts) {
        commit('SET_TAG_NEXT_DATA_LINK', posts)
    },
    SetMoreTagArticles({ commit }, posts) {
        commit('SET_MORE_TAG_ARTICLES', posts)
    }
}
