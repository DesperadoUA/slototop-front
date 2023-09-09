<template>
	<div :class="'games --alt-bg ' + bg">
		<div class="container">
			<div class="slots__heading" v-if="title">
				<h2 class="slots__ttl">{{ title }}</h2>
				<NuxtLink
					no-prefetch
					:to="`${config.AMP_PREFIX}${link}`"
					class="link-primary"
					v-if="link"
				>
					{{ linkText }}
				</NuxtLink>
			</div>
			<div class="games__container flex-wrap">
				<div
					class="game-item"
					v-for="(item, index) in currentPosts"
					:key="index"
				>
					<div class="game-item__logo">
						<NuxtLink
							class="btn-play"
							:to="`${config.AMP_PREFIX}${item.permalink}`"
						>
							<amp-img :src="item.thumbnail" alt="" width="224" height="140" />
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="loadContainer games__container flex-wrap"></div>
		</div>

		<div
			class="games__more items-more"
			v-if="value.length > numberPostOnQuery * postCurrentPage"
		>
			<button
				class="btn-secondary loadMoreBtn"
				:data-apiUrl="`${config.API_URL[config.LANG]}game/search`"
				:data-postsOnQuery="numberPostOnQuery"
				:data-ampPrefix="config.AMP_PREFIX"
				:data-post-type="post_type"
				:data-post-url="post_url"
				:data-translate-play="translates.PLAY[config.LANG]"
			>
				{{ translates.SHOW_MORE[config.LANG] }}
			</button>
		</div>
	</div>
</template>
<script>
import translateMixin from '~/mixins/translate'
import { GAME as NumberPostOnQuery } from '~/config/postLoader'
export default {
	name: 'app_slot_loop_downloads_amp',
	mixins: [translateMixin],
	props: {
		value: {
			type: Array,
			default: []
		},
		title: {
			type: String,
			default: undefined
		},
		link: {
			type: String,
			default: undefined
		},
		linkText: {
			type: String,
			default: undefined
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
			default: 'games',
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
