<template>
	<section :class="'games ' + bg">
		<div class="container">
			<div class="slots__heading">
				<h2 class="slots__ttl" v-if="title">{{ title }}</h2>
				<NuxtLink no-prefetch :to="link" class="link-primary" v-if="link">
					{{ linkText }}
				</NuxtLink>
			</div>

			<div class="games__container flex-wrap">
				<NuxtLink
					class="game-item"
					no-prefetch
					:to="item.permalink"
					v-for="(item, index) in value"
					:key="index"
				>
					<div class="game-item__logo">
						<img :src="item.thumbnail" loading="lazy" width="224" alt="" />
					</div>

					<div class="game-item__hover">
						<span class="game-item__name">{{ item.title }}</span>
						<span class="game-item__category">{{ item.vendor.title }}</span>
						<NuxtLink class="btn-play" :to="item.permalink">{{
							translates.PLAY[config.LANG]
						}}</NuxtLink>
					</div>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_slots',
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
		}
	}
}
</script>
