module.exports = function(req, res, next) {
    const {url} = req
    if (url === '/' || !url.endsWith('/')) {
        next()
    }  else {
        const newLocation = url.replace(/\/+$/, '') || '/'
        res.writeHead(301, {Location: newLocation})
        res.end()
    }
}
