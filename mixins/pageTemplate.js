import translateMixin from '~/mixins/translate'
import PageBanner from '~/components/page_banner'
import Content from '~/components/content'
import AuthorLink from '~/components/author/app-author-link'
export default {
	mixins: [translateMixin],
	components: {
		Content,
		PageBanner,
		AuthorLink
	},
}
