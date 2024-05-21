<template>
	<div>
		<app_author_top
			v-if="data.body.h1 !== ''"
			:img="data.body.thumbnail"
			:name="data.body.h1"
			:specialty="translates.AUTHOR_SPECIALIZATION[config.LANG]"
			:shortDesc="data.body.short_desc"
			:socialLinks="authorSocialLinks"
		/>
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_author_top from '~/components/author/app-author-top'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'author-page',
	components: { app_author_top },
	mixins: [head, pageTemplate],
	async asyncData({ store, route }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('author')
			.get()
		const data = helper.headDataMixin(response.data, route)
		return { data }
	},
	computed: {
		authorSocialLinks() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				return (this.socialLinks = this.$store.getters['settings/getSettings'].filter(
					item => item.key === 'social_links_author'
				)[0].value)
			}
			return []
		}
	}
}
</script>
