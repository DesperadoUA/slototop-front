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

		<div
			class="items-more"
			v-if="value.length > numberPostOnQuery * postCurrentPage"
		>
			<button no-prefetch class="btn-secondary" @click="postShowMore">
				{{ translates.SHOW_MORE[config.LANG] }}
			</button>
		</div>
	</div>
</template>
<script>
import { PAYMENT as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_payment_loop_downloads',
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
	mixins: [translateMixin],
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
