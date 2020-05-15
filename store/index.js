import ApiService from '~/services/ApiService.js'

export const state = () => ({

    HomeArticles: [],
    AuthorArticles: [],
    ProgrammingArticles: [],


    topContent: [],

    mobileBrandLogo: [],
    SelectedMobileBrandArticle: [],
    mobileTop: [],
    mobileBottom: [],
    celebrity: [],
    islam: [],
    history: [],
    health: [],
    technology: [],
    education: [],
    searched: [],
    detailArticle: {},

    detailsCard: {}
})


export const mutations = {
    SetHomeArticles(state, payload) {
        state.HomeArticles = payload
    },
    SetMoreHomeArticles(state, payload) {
        state.HomeArticles.push(payload)
    },

    SetAuthorArticles(state, payload) {
        state.AuthorArticles = payload
    },


    SetProgrammingArticles(state, payload) {
        state.ProgrammingArticles = payload
    },
    SetMoreProgrammingArticles(state, payload) {
        state.ProgrammingArticles.push(payload)
    },




    setTopContent(state, payload) {
        state.topContent = payload
    },
    setLoadMoreTopContent(state, payload) {
        state.topContent.push(payload)
    },


    setMobileBrandLogo(state, payload) {
        state.mobileBrandLogo = payload

    },

    setSelectedMobileBrandArticle(state, payload) {
        state.SelectedMobileBrandArticle = payload
    },
    setCelebrity(state, payload) {
        state.celebrity = payload
    },
    setLoadMoreCelebrityArticle(state, payload) {
        state.celebrity.push(payload)
    },
    setIslam(state, payload) {
        state.islam = payload
    },
    setLoadMoreIslamArticle(state, payload) {
        state.islam.push(payload)
    },

    setHistory(state, payload) {
        state.history = payload
    },
    setLoadMoreHistoryArticle(state, payload) {
        state.history.push(payload)
    },
    setHealth(state, payload) {
        state.health = payload
    },
    setLoadMoreHealthArticle(state, payload) {
        state.health.push(payload)
    },

    setTechnology(state, payload) {
        state.technology = payload
    },
    setLoadMoreTechnologyArticle(state, payload) {
        state.technology.push(payload)
    },

    setEducation(state, payload) {
        state.education = payload
    },
    setLoadMoreEducationArticle(state, payload) {
        state.education.push(payload)
    },
    setMobileTop(state, payload) {
        state.mobileTop = payload
    },
    setMobileBottom(state, payload) {
        state.mobileBottom = payload
    },
    setDetailArticle(state, payload) {
        state.detailArticle = payload

    },

    addToCart(state, payload) {
        state.cart.push(payload)
    },
    removeItem(state, payload) {
        state.cart.splice(payload, 1)
    },
    searchedInventory(state, payload) {
        state.searched = payload
    },
    reset(state) {
        state.cart = []
    },
    setDetailCard(state, payload) {
        state.detailCard = payload
    },
    SET_DetailsCard(state, payload) {
        state.detailsCard = payload
    },
    SET_loadingData(state, payload) {
        state.loadingData = payload
    },

}

export const actions = {
    FetchHomeArticles({ commit }) {
        return ApiService.GetHomeArticles().then(response => {
            commit('SetHomeArticles', response.data.results)
        })
    },
    FetchMoreHomeArticles(context, payload) {
        context.commit('SetMoreHomeArticles', payload)
    },

    FetchAuthorArticles({ commit }, authorName) {
        return ApiService.GetAuthorArticles(authorName).then(response => {
            commit('SetAuthorArticles', response.data)
        })

    },

    FetchProgrammingArticles({ commit }) {
        return ApiService.GetProgrammingArticles().then(response => {
            commit('SetProgrammingArticles', response.data.results)
        })

    },


    FetchMoreProgrammingArticles(context, payload) {
        context.commit('SetMoreProgrammingArticles', payload)
    },



    fetchDetailsCard({ commit }, slug) {
        return ApiService.getdetailsCard(slug).then(response => {
            commit('SET_DetailsCard', response.data),
                commit('SET_loadingData', false)
        })

    },

    setHomeArticle(context, payload) {
        context.commit('setHomeArticle', payload)
    },


    setTopContent(context, payload) {
        context.commit('setTopContent', payload)
    },
    setLoadMoreTopContent(context, payload) {
        context.commit('setLoadMoreTopContent', payload)
    },
    setProgramming(context, payload) {
        context.commit('setProgramming', payload)
    },
    setLoadMoreProgrammingArticle(context, payload) {
        context.commit('setLoadMoreProgrammingArticle', payload)
    },

    setMobileBrandLogo(context, payload) {
        context.commit('setMobileBrandLogo', payload)
    },
    setSelectedMobileBrandArticle(context, payload) {
        context.commit('setSelectedMobileBrandArticle', payload)
    },

    setCelebrity(context, payload) {
        context.commit('setCelebrity', payload)
    },
    setLoadMoreCelebrityArticle(context, payload) {
        context.commit('setLoadMoreCelebrityArticle', payload)
    },
    setIslam(context, payload) {
        context.commit('setIslam', payload)
    },
    setLoadMoreIslamArticle(context, payload) {
        context.commit('setLoadMoreIslamArticle', payload)
    },
    setHistory(context, payload) {
        context.commit('setHistory', payload)
    },

    setLoadMoreHistoryArticle(context, payload) {
        context.commit('setLoadMoreHistoryArticle', payload)
    },
    setHealth(context, payload) {
        context.commit('setHealth', payload)
    },

    setLoadMoreHealthArticle(context, payload) {
        context.commit('setLoadMoreHealthArticle', payload)
    },
    setTechnology(context, payload) {
        context.commit('setTechnology', payload)
    },
    setLoadMoreTechnologyArticle(context, payload) {
        context.commit('setLoadMoreTechnologyArticle', payload)
    },
    setEducation(context, payload) {
        context.commit('setEducation', payload)
    },
    setLoadMoreEducationArticle(context, payload) {
        context.commit('setLoadMoreEducationArticle', payload)
    },
    addToCart(context, payload) {
        context.commit('addToCart', payload)
    },
    setMobileTop(context, payload) {
        context.commit('setMobileTop', payload)
    },
    setMobileBottom(context, payload) {
        context.commit('setMobileBottom', payload)
    },
    setTechnology(context, payload) {
        context.commit('setTechnology', payload)
    },
    setDetailArticle(context, payload) {
        context.commit('setDetailArticle', payload)

    },
    setAuthorAllArticle(context, payload) {
        context.commit('setAuthorAllArticle', payload)
    },
    setAuthorAllArticle(context, payload) {
        context.commit('setAuthorAllArticle', payload)
    },
    searchedInventory(context, payload) {
        context.commit('searchedInventory', payload)
    },
    removeItem(context, payload) {
        context.commit('removeItem', payload)
    }

}
export const getters = {
    // getHomeArticle(state) {
    //     return state.homeArticle
    // },
    // getTopContent(state) {
    //     return state.topContent
    // },
    // getProgramming(state) {
    //     return state.programming
    // },
    // getMobileBrandLogo(state) {
    //     return state.mobileBrandLogo
    // },
    // getSelectedMobileBrandArticle(state) {
    //     return state.SelectedMobileBrandArticle
    // },
    // getMobileTop(state) {
    //     return state.mobileTop
    // },
    // getMobileBottom(state) {
    //     return state.mobileBottom
    // },

    // getCelebrity(state) {
    //     return state.celebrity
    // },
    // getIslam(state) {
    //     return state.islam
    // },
    // getHistory(state) {
    //     return state.history
    // },
    // getHealth(state) {
    //     return state.health
    // },
    // getTechnology(state) {
    //     return state.technology
    // },

    // getEducation(state) {
    //     return state.education
    // },
    // getSearched(state) {
    //     return state.searched
    // },
    // getdetailArticle(state) {
    //     return state.detailArticle
    // },
    // getAuthorAllArticle(state) {
    //     return state.authorAllArticle
    // }
}
