export default ({ req, store }) => {
	if (process.server) store.dispatch('common/setHeaders', req.headers)
}
