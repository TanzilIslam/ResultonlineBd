import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    DesignLibraryArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_DESIGNLIBRARY_ARTICLES(state, payload) {
        state.DesignLibraryArticles = payload
    },
    SET_MORE_DESIGNLIBRARY_ARTICLES(state, payload) {
        state.DesignLibraryArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.DesignLibraryArticles.push(payload)
    }
}
export const actions = {

    FetchDesignLibraryArticles({ commit }, posts) {
        commit('SET_DESIGNLIBRARY_ARTICLES', posts)
    },
    FetchMoreDesignLibraryArticles({ commit, rootState }) {
        return ApiService.GetMoreDesignLibraryArticles(rootState.designlibrary.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_DESIGNLIBRARY_ARTICLES', element)
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
