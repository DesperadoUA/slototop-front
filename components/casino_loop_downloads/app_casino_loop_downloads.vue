<template>
	<div :class="'casinos ' + bg">
		<div class="slots">
			<div class="container">
				<div class="slots__heading" v-if="title">
					<h2 class="slots__ttl">{{ title }}</h2>
					<NuxtLink
						no-prefetch
						:to="link"
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
							<NuxtLink no-prefetch :to="item.permalink">
								<img :src="item.thumbnail" loading="lazy" alt="" />
							</NuxtLink>
						</div>
						<div class="slot-item__content">
							<div class="slot-item__name">
								<NuxtLink no-prefetch :to="item.permalink">
									{{ item.title }}
								</NuxtLink>
								<img
									src="/img/check.svg"
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
							<button class="slot-item__btn --blue" @click="refActivate(item)">
								{{ translates.GO_TO[config.LANG] }}
							</button>
						</div>

						<span class="ribbon-closed" v-if="item.close !== 0">{{
							translates.CLOSE[config.LANG]
						}}</span>
					</article>
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
	</div>
</template>

<script>
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_casino_loop_downloads',
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
		refActivate(item) {
			Helper.refActivate(item)
		},
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}
</script>
