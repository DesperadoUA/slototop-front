<template>
	<div>
		<PageBanner :title="data.body.h1" :shortDesc="data.body.short_desc" />
		<div class="container">
			<div class="contentEnd">
				<AuthorLink
					:link="config.AUTHOR_PAGE_LINK"
					:text="translates.REVIEW_AUTHOR[config.LANG]"
					:dataTime="data.body.created_at.slice(0, 10)"
					:name="data.body.author_name"
				/>
			</div>
		</div>
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
	</div>
</template>

<script>
import helper from '~/helpers/helpers'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
import DAL_Builder from "~/DAL/builder";
export default {
	name: 'license-page',
	data: () => {
		return {}
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
        const request = new DAL_Builder()
        const response = await request
            .postType('pages')
            .url('licenses')
            .get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = helper.headDataMixin(response.data, route)
			return { data }
		}
	}
}
</script>
