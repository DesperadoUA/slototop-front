<template>
	<div :class="'games ' + bg">
		<div class="container">
			<div class="games__container flex-wrap">
				<NuxtLink
					class="game-item"
					no-prefetch
					:to="`${config.AMP_PREFIX}${item.permalink}`"
					v-for="(item, index) in currentPosts"
					:key="index"
				>
					<div class="game-item__logo">
						<amp-img :src="item.thumbnail" width="224" height="140" alt="" />
					</div>
				</NuxtLink>
			</div>
			<div class="loadContainer games__container flex-wrap"></div>
		</div>

		<div class="items-more">
			<button
				v-if="value.length > numberPostOnQuery * postCurrentPage"
				:data-apiUrl="config.API_URL[config.LANG]"
				:data-postsOnQuery="numberPostOnQuery"
				:data-ampPrefix="config.AMP_PREFIX"
				:data-post-type="post_type"
				:data-post-url="post_url"
				class="btn-secondary loadMoreBtn"
			>
				{{ translates.SHOW_MORE[config.LANG] }}
			</button>
		</div>
	</div>
</template>
<script>
import { VENDOR as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_vendor_loop_downloads_amp',
	mixins: [translateMixin],
	props: {
		value: {
			type: Array,
			default: []
		},
		bg: {
			type: String,
			default: ''
		},
		post_type: {
			default: 'page',
			type: String
		},
		post_url: {
			default: 'vendors',
			type: String
		}
	},
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			postCurrentPage: 1
		}
	},
	computed: {
		currentPosts() {
			return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		}
	}
}
</script>
