<template>
	<div>
		<PageBanner :title="data.body.h1" :shortDesc="data.body.short_desc" />
		<div class="container">
			<div class="contentEnd">
				<app_author_link
					:link="config.AUTHOR_PAGE_LINK"
					:text="translates.REVIEW_AUTHOR[config.LANG]"
					:dataTime="data.body.created_at.slice(0, 10)"
					:name="data.body.author_name"
				/>
			</div>
		</div>
		<app_poker_loop_downloads :value="data.body.poker" bg="--bg-gray" v-if="data.body.poker.length !== 0" />
		<Content :value="data.body.content" v-if="data.body.content !== ''" />
		<app_faq :value="changeFaq" :title="'Faq'" v-if="changeFaq.length !== 0" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import helper from '~/helpers/helpers'
import app_poker_loop_downloads from '~/components/poker_loop/app_poker_loop_downloads'
import app_faq from '~/components/faq/app_faq'
import app_author_link from '~/components/author/app-author-link'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
export default {
	name: 'poker-page',
	data: () => {
		return {
			faq: []
		}
	},
	components: {
		app_poker_loop_downloads,
		app_faq,
		app_author_link
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		error({ statusCode: 404, message: 'Post not found' })
		/* const request = {
            url: 'pokers'
        };
        const response = await DAL_Page.getData(request);
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const data = helper.headDataMixin(response.data, route)
            return {data}
        }

        */
	},
	computed: {
		changeFaq() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.faq = settings.filter(item => item.key === 'poker_page_faq')[0].value
			}
			return this.faq
		}
	}
}
</script>
