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
}