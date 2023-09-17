<template>
	<div :class="'casinos ' + bg">
		<div class="slots">
			<div class="container">
				<div class="slots__heading" v-if="title">
					<h2 class="slots__ttl">{{ title }}</h2>
				</div>
				<div class="slots__container items-wrap">
					<div
						class="slot-item"
						v-for="(item, index) in currentPosts"
						:key="index"
					>
						<div class="slot-item__logo">
							<NuxtLink
								no-prefetch
								:to="`${config.AMP_PREFIX}${item.permalink}`"
							>
								<amp-img
									:src="item.thumbnail"
									alt=""
									width="214"
									height="136"
								/>
							</NuxtLink>
						</div>
						<div class="slot-item__content">
							<div class="slot-item__name">{{ item.title }}</div>
							<div class="slot-item__stats">
								<div class="star-rating">
									<span
										class="star-rating__val"
										:style="item | widthRating"
									></span>
								</div>
								<strong class="slot-item__stats-val"
									>{{ item.rating }}/100</strong
								>
							</div>
						</div>

						<div class="slot-item__btns">
							<a class="slot-item__btn --blue" :href="getRef(item)">{{
								translates.GO_TO[config.LANG]
							}}</a>
						</div>
					</div>
				</div>
				<div class="loadContainer slots__container items-wrap"></div>
			</div>
			<div
				class="items-more"
				v-if="value.length > numberPostOnQuery * postCurrentPage"
			>
				<button
					:data-apiUrl="`${config.API_URL[config.LANG]}poker/search`"
					:data-postsOnQuery="numberPostOnQuery"
					:data-ampPrefix="config.AMP_PREFIX"
					:data-post-type="post_type"
					:data-post-url="post_url"
					:data-translate-go-to="translates.GO_TO[config.LANG]"
					class="btn-secondary loadMoreBtn"
				>
					{{ translates.SHOW_MORE[config.LANG] }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
import { POKER as NumberPostOnQuery } from '~/config/postLoader'
export default {
	name: 'app_poker_loop_downloads_amp',
	props: {
		value: {
			type: Array,
			default: []
		},
		bg: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: undefined
		},
		post_type: {
			default: 'page',
			type: String
		},
		post_url: {
			default: 'poker',
			type: String
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
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		},
		widthRating(item) {
			return `width: ${item.rating}%`
		}
	},
	methods: {
		getRef(item) {
			return Helper.getRef(item)
		}
	}
}
</script>

<style lang="scss" scoped></style>
