import ApiService from '~/services/ApiService.js'
export const namespaced = true


export const actions = {
    setViewcount(slug) {
        return ApiService.SetView(slug).then(response => {
            console.log(response);
        })
    }
}
