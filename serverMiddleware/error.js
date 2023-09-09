import { errors } from './storeErrors.js'

module.exports = function(req, res, next) {
	const host = req.headers.host
	const fullUrl = req.url
	let url = req.url.split('?')[0]
	if (url in errors) {
		res.writeHead(410, { 'Content-Type': 'text/html' })
		res.end()
	} else {
		next()
	}
}
