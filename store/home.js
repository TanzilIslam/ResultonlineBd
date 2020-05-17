import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HomeArticles: [],
    ContentLoading: true
})

export const mutations = {
    SET_HOME_ARTICLES(state, payload) {
        state.HomeArticles = payload
    },
    SET_MORE_HOME_ARTICLES(state, payload) {
        state.HomeArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_CONTENT_LOADING(state, payload) {
        state.ContentLoading = payload
    }
}

export const actions = {

    FetchHomeArticles({ commit }) {
        return ApiService.GetHomeArticles().then(response => {
            commit('SET_HOME_ARTICLES', response.data.results),
                commit('SET_CONTENT_LOADING', false)

        })
    },
    FetchMoreHomeArticles({ commit, rootState }) {


        return ApiService.GetMoreHomeArticles(rootState.home.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HOME_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
}
