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
		<app_breadcrumbs :value="data.body.breadcrumbs" />
		<app_bonus_card :value="data.body" />
		<app_bonus_details :value="data.body" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_bonuses_casino
			v-if="data.body.bonuses.length !== 0"
			:value="data.body.bonuses"
			:title="`${translates.OTHER_BONUSES[config.LANG]} ${data.body.casino[0].title}`"
			:topTextShow="false"
		/>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import config from '~/config'
import breadcrumbs from '~/config/breadcrumbs'
import helper from '~/helpers/helpers'
import app_bonuses_casino from '~/components/bonus_casino/app_bonuses_casino'
import app_breadcrumbs from '~/components/breadcrumbs/app_breadcrumbs'
import app_bonus_card from '~/components/bonus_card/app_bonus_card'
import app_bonus_details from '~/components/bonus_detail/app-bonus-detail'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'single-bonus',
	data: () => {
		return {}
	},
	components: {
		app_bonuses_casino,
		app_breadcrumbs,
		app_bonus_details,
		app_bonus_card
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('bonus')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = helper.headDataMixin(response.data, route)
				data.body.breadcrumbs = [
					{ ...breadcrumbs.BREADCRUMBS_ROOT[config.LANG] },
					{ ...breadcrumbs.BREADCRUMBS_BONUSES[config.LANG] },
					{ title: data.body.title, permalink: '' }
				]
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}
	}
}
</script>
