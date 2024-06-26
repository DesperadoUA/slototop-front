{
	const btn = document.querySelector('.loadMoreBtn')
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetApiUrl = btn.attributes.filter(
			item => item.name === 'data-apiurl'
		)
		const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

		const dataSetPostsOnQuery = btn.attributes.filter(
			item => item.name === 'data-postsonquery'
		)
		const postsOnQuery = dataSetPostsOnQuery.length
			? dataSetPostsOnQuery[0].value
			: 20

		const dataSetAmpPrefix = btn.attributes.filter(
			item => item.name === 'data-ampprefix'
		)
		const ampPrefix = dataSetAmpPrefix.length
			? dataSetAmpPrefix[0].value
			: '/amp'

		const dataSetPostType = btn.attributes.filter(
			item => item.name === 'data-post-type'
		)
		const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

		const dataSetPostUrl = btn.attributes.filter(
			item => item.name === 'data-post-url'
		)
		const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

		const dataSetPlay = btn.attributes.filter(
			item => item.name === 'data-translate-play'
		)
		const play = dataSetPlay.length ? dataSetPlay[0].value : ''

		function renderTemplate(posts, counter) {
			const length =
				(counter + 1) * postsOnQuery > posts.length
					? posts.length
					: (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += `<a href="${ampPrefix}${posts[i].permalink}" class="game-item">
                                <div class="game-item__logo">
                                    <amp-img src="${posts[i].thumbnail}" alt="" width='224' height='140' />
                                </div>

                                <div class="game-item__hover">
                                    <span class="game-item__name">${posts[i].title}</span>
                                    <span class="game-item__category">${posts[i].vendor.title}</span>
                                    <a class="btn-play" href="${ampPrefix}${posts[i].permalink}">
                                       ${play}
                                    </a>
                                </div>
                            </a>`
			}
			loadContainer.innerHTML += html
		}
		function isShowBtn(posts, counter) {
			return (counter + 1) * postsOnQuery < posts.length
		}
		function getRef(item) {
			if (item.ref.length !== 0) {
				const min = 0
				const max = item.ref.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				return item.ref[random].casino_ref
			} else {
				return '#'
			}
		}
		btn.addEventListener('click', () => {
			if (counter === 0) {
				btn.disabled = true
				fetch(apiUrl, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({ type: 'loading', postType, url: postUrl, card: 'slot' })
				})
					.then(response => response.json())
					.then(data => {
						btn.disabled = false
						counter++
						posts = data.body.posts
						renderTemplate(posts, counter)
						if (!isShowBtn(posts, counter)) btn.remove()
					})
			} else {
				counter++
				renderTemplate(posts, counter)
				if (!isShowBtn(posts, counter)) btn.remove()
			}
		})
	}
}
/*
    pages: ['games']
    postTypes: ['vendor']
 */
