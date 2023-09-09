<template>
	<div :class="'casinos ' + bg">
		<div class="slots">
			<div class="container">
				<div class="slots__heading" v-if="title">
					<h2 class="slots__ttl">{{ title }}</h2>
					<NuxtLink
						no-prefetch
						:to="`${config.AMP_PREFIX}${link}`"
						class="link-primary"
						v-if="linkText"
						>{{ linkText }}</NuxtLink
					>
				</div>
				<div class="slots__container items-wrap">
					<article
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
									width="214"
									height="138"
									alt=""
								/>
							</NuxtLink>
						</div>
						<div class="slot-item__content">
							<div class="slot-item__name">
								<NuxtLink
									no-prefetch
									:to="`${config.AMP_PREFIX}${item.permalink}`"
								>
									{{ item.title }}
								</NuxtLink>
								<amp-img
									src="/img/check.svg"
									width="30"
									height="15"
									alt=""
									v-if="item.licenses.length !== 0"
								/>
							</div>
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
						<span class="ribbon-closed" v-if="item.close !== 0">{{
							translates.CLOSE[config.LANG]
						}}</span>
					</article>
				</div>
				<div class="loadContainer slots__container items-wrap"></div>
			</div>
			<div class="items-more">
				<button
					v-if="value.length > numberPostOnQuery * postCurrentPage"
					class="btn-secondary loadMoreBtn"
					:data-apiUrl="`${config.API_URL[config.LANG]}casino/search`"
					:data-postsOnQuery="numberPostOnQuery"
					:data-ampPrefix="config.AMP_PREFIX"
					:data-post-type="post_type"
					:data-post-url="post_url"
					:data-translate-go-to="translates.GO_TO[config.LANG]"
					:data-translate-close="translates.CLOSE[config.LANG]"
				>
					{{ translates.SHOW_MORE[config.LANG] }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_casino_loop_downloads_amp',
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
			default: 'casino',
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
