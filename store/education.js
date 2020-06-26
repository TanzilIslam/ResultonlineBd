import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    EducationArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_EDUCATION_ARTICLES(state, payload) {
        state.EducationArticles = payload
    },
    SET_MORE_EDUCATION_ARTICLES(state, payload) {
        state.EducationArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.EducationArticles.push(payload)
    }
}
export const actions = {

    FetchEducationArticles({ commit }, posts) {
        commit('SET_EDUCATION_ARTICLES', posts)
    },
    FetchMoreEducationArticles({ commit, rootState }) {
        return ApiService.GetMoreEducationArticles(rootState.education.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_EDUCATION_ARTICLES', element)
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
