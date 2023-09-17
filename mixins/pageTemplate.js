import translateMixin from '~/mixins/translate'
import Content from '~/components/content/app-content'
import PageBanner from '~/components/page_banner'
export default {
	mixins: [translateMixin],
	components: {
		Content,
		PageBanner
	},
}
