import config from  '~/config'
export default class Helper {
    static refActivate(item){
        if(item.ref.length !== 0) {
            const min = 0
            const max = item.ref.length - 1
            const random = Math.floor(Math.random() * (max - min + 1)) + min
            window.open(item.ref[random], '_blank')
        }
    }
    static classRating(item){
        if(item.rating <= 33) return '--cr-rating: #f00'
        if(item.rating > 33 && item.rating <= 67) return '--cr-rating: #ffc700'
        if(item.rating > 67) return '--cr-rating: #0f6'
    }
    static hreflang(arr) {
        let newArr = []
        const defaultItem = arr.filter(item => item.lang === config.DEFAULT_LANG)
        if(defaultItem.length !== 0) {
            newArr =  arr.map(item => {
                return {
                    hreflang: item.lang,
                    rel: 'alternate',
                    href: item.link
                }
            })
                .concat([{
                hreflang: 'x-default',
                rel: 'alternate',
                href: defaultItem[0].link
            }])
        }
        return newArr
    }
    static headDataMixin(data, route) {
        data.body.currentUrl = config.BASE_URL + route.path
        data.body.index_seo = Number(data.body.index_seo) ? 'index' : 'noindex'
        data.body.follow = Number(data.body.follow) ? 'follow' : 'nofollow'
        data.body.headerLinks = this.hreflang(data.body.hreflang)
        return data;
    }
}