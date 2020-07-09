export const namespaced = true
export const state = () => ({
    AuthorArticles: [],
})

export const mutations = {
    SET_AUTHOR_ARTICLES(state, payload) {
        state.AuthorArticles = payload
    },
    SET_MORE_ARTICLES(state, payload) {
        state.AuthorArticles.List.push(payload)
    }
}

export const actions = {
    AddMore({ commit }, posts) {
        commit('SET_MORE_ARTICLES', posts)
    },
    FetchAuthorArticles({ commit }, posts) {
        commit('SET_AUTHOR_ARTICLES', posts)
    }
}
