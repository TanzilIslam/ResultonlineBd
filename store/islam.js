import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    IslamArticles: []
})

export const mutations = {
    SET_ISLAM_ARTICLES(state, payload) {
        state.IslamArticles = payload
    },
    SET_MORE_ISLAM_ARTICLES(state, payload) {
        state.IslamArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    }
}

export const actions = {

    FetchIslamArticles({ commit }, posts) {
        commit('SET_ISLAM_ARTICLES', posts)
    },
    FetchMoreIslamArticles({ commit, rootState }) {
        return ApiService.GetMoreIslamArticles(rootState.islam.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_ISLAM_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
}
