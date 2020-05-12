export const state = () => ({
    homeArticle: [],
    topContent: [],
    programming: [],
    mobileBrandLogo: [],
    SelectedMobileBrandArticle: [],
    celebrity: [],
    islam: [],
    history: [],
    health: [],
    technology: [],
    education: [],

    showLatestDiv: true,
    showAboutDiv: false,



    loadmore: [],
    cart: [],
    searched: [],





    food: [],
    feed: [],

    mobileTop: [],
    mobileBottom: []

})

export const getters = {
    getHomeArticle(state) {
        return state.homeArticle
    },
    getTopContent(state) {
        return state.topContent
    },
    getProgramming(state) {
        return state.programming
    },
    getMobileBrandLogo(state) {
        return state.mobileBrandLogo
    },
    getSelectedMobileBrandArticle(state) {
        return state.SelectedMobileBrandArticle
    },
    getCelebrity(state) {
        return state.celebrity
    },
    getIslam(state) {
        return state.islam
    },
    getHistory(state) {
        return state.history
    },
    getHealth(state) {
        return state.health
    },
    getTechnology(state) {
        return state.technology
    },

    getEducation(state) {
        return state.education
    },

    getshowLatestDiv(state) {
        return state.showLatestDiv
    },
    getshowAboutDiv(state) {
        return state.showAboutDiv
    },




    getMobileTop(state) {
        return state.mobileTop
    },
    getMobileBottom(state) {
        return state.mobileBottom
    },
    getFeed(state) {
        return state.feed
    },
    getFood(state) {
        return state.food
    },





    getCart(state) {
        return state.cart
    },
    getSearched(state) {
        return state.searched
    },
    getLoadmore(state) {
        return state.loadmore

    }

}

export const mutations = {
    setHomeArticle(state, payload) {
        state.homeArticle = payload
    },
    setLoadMoreHomeArticle(state, payload) {
        state.homeArticle.push(payload)
    },

    setTopContent(state, payload) {
        state.topContent = payload
    },
    setLoadMoreTopContent(state, payload) {
        state.topContent.push(payload)
    },
    setProgramming(state, payload) {
        state.programming = payload
    },
    setLoadMoreProgrammingArticle(state, payload) {
        state.programming.push(payload)
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
    setshowLatestDiv(state, payload) {
        state.showLatestDiv = payload

    },

    setshowAboutDiv(state, payload) {
        state.showAboutDiv = payload

    },

    setMobileTop(state, payload) {
        state.mobileTop = payload
    },
    setMobileBottom(state, payload) {
        state.mobileBottom = payload
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
    }
}

export const actions = {
    setHomeArticle(context, payload) {
        context.commit('setHomeArticle', payload)
    },
    setLoadMoreHomeArticle(context, payload) {
        context.commit('setLoadMoreHomeArticle', payload)
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
    setshowLatestDiv(context, payload) {
        context.commit('setshowLatestDiv', payload)
    },

    setshowAboutDiv(context, payload) {
        context.commit('setshowAboutDiv', payload)
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
    setFeed(context, payload) {
        context.commit('setFeed', payload)
    },
    setFood(context, payload) {
        context.commit('setFood', payload)
    },
    setTechnology(context, payload) {
        context.commit('setTechnology', payload)
    },
    searchedInventory(context, payload) {
        context.commit('searchedInventory', payload)
    },
    removeItem(context, payload) {
        context.commit('removeItem', payload)
    }

}
