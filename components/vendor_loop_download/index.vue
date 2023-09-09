<template>
	<div :class="'games ' + bg">
		<div class="container">
			<div class="games__container flex-wrap">
				<NuxtLink
					class="game-item"
					no-prefetch
					:to="item.permalink"
					v-for="(item, index) in currentPosts"
					:key="index"
				>
					<div class="game-item__logo">
						<img :src="item.thumbnail" loading="lazy" width="224" alt="" />
					</div>
				</NuxtLink>
			</div>
		</div>

		<div class="items-more">
			<button
				no-prefetch
				v-if="value.length > numberPostOnQuery * postCurrentPage"
				class="btn-secondary"
				@click="postShowMore"
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
	name: 'app_vendor_loop_downloads',
	mixins: [translateMixin],
	props: {
		value: {
			type: Array,
			default: []
		},
		bg: {
			type: String,
			default: ''
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
	},
	methods: {
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}
</script>

<style lang="scss" scoped></style>
