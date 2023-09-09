<template>
	<section :class="'slots ' + bg">
		<div class="container">
			<div class="slots__heading">
				<h2 class="slots__ttl">{{ title }}</h2>
				<NuxtLink
					no-prefetch
					:to="`${config.AMP_PREFIX}/${link}`"
					class="link-primary"
					v-if="linkText"
					>{{ linkText }}</NuxtLink
				>
			</div>

			<div class="slots__container">
				<article class="slot-item" v-for="(item, index) in value" :key="index">
					<div class="slot-item__logo">
						<NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
							<amp-img :src="item.thumbnail" alt="" width="214" height="138" />
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
								alt=""
								v-if="item.licenses.length !== 0"
								width="30"
								height="15"
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
		</div>
	</section>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_casino_amp',
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
		return {}
	},
	filters: {
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

<style lang="scss"></style>
