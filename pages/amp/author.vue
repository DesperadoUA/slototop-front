<template>
	<div>
		<app_header_amp
			:logo="data.body.options.logo"
			:menu_links="data.body.settings.header_menu"
		/>
		<main class="main">
			<app_author_top
				v-if="data.body.h1 !== ''"
				:img="data.body.thumbnail"
				:name="data.body.h1"
				:specialty="translates.AUTHOR_SPECIALIZATION[config.LANG]"
				:shortDesc="data.body.short_desc"
				:socialLinks="data.body.settings.social_links_author"
			/>
			<app_content_amp
				:value="data.body.amp_content"
				v-if="data.body.amp_content !== ''"
			/>
		</main>
		<app_footer_amp
			:footer_menu="data.body.settings.footer_menu"
			:footer_text="data.body.settings.footer_text"
			:partners_menu="data.body.settings.partners_menu"
		/>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_author_top from '~/components/author/app-author-top'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
export default {
	name: 'author-page_amp',
	components: { app_author_top },
	mixins: [pageTemplateAmp],
	async asyncData({ store, route }) {
        const request = new DAL_Builder()
        const response = await request
            .postType('pages')
            .url('author')
            .get()
		const data = await helper.globalDataMixin(response, route)
		return { data }
	}
}
</script>
