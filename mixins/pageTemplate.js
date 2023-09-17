import translateMixin from '~/mixins/translate'
import PageBanner from '~/components/page_banner'
import Content from '~/components/content'
export default {
	mixins: [translateMixin],
	components: {
		Content,
		PageBanner
	},
}
