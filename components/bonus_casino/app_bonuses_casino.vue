<template>
	<section class="bonuses-casino">
		<div class="container">
			<div class="bonuses-casino__heading">
				<span class="badge-top" v-if="topTextShow">Топ 10</span>
				<h2 class="bonuses-casino__ttl" v-if="title">{{ title }}</h2>
				<NuxtLink no-prefetch :to="link" class="link-primary" v-if="linkText">{{ linkText }}</NuxtLink>
			</div>

			<div class="bonuses__container">
				<article class="bonuses-item" v-for="(item, index) in value" :key="index">
					<div class="bonuses-item__logo">
						<NuxtLink no-prefetch :to="item.permalink">
							<img :src="item.casino.thumbnail" :alt="item.title" />
						</NuxtLink>
					</div>
					<div class="bonuses-item__name">
						<NuxtLink no-prefetch :to="item.permalink">
							{{ item.title }}
						</NuxtLink>
					</div>
					<div class="bonuses-item__val">{{ item.value }}</div>
					<div class="bonuses-tags">
						<NuxtLink
							class="bonuses-tag"
							v-for="(item_cat, index_cat) in item.type_bonus"
							:key="index_cat"
							:to="item_cat.permalink"
							>{{ item_cat.title }}</NuxtLink
						>
					</div>

					<div class="bonuses-item__btns">
						<NuxtLink no-prefetch :to="item.permalink" class="hidden-sm bonuses-item__btn btn-secondary">
							{{ translates.READ_MORE[config.LANG] }}
						</NuxtLink>
						<button
							type="button"
							class="bonuses-item__btn btn-primary"
							@click="refActivate(item)"
							v-if="item.close === 0"
						>
							{{ translates.GET_BONUS[config.LANG] }}
						</button>
						<span class="bonuses-item__btn fake-btn-secondary" v-else>{{ translates.BONUS_INVALID[config.LANG] }}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_bonuses',
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
		topTextShow: {
			type: Boolean,
			default: true
		}
	},
	mixins: [translateMixin],
	data() {
		return {}
	},
	methods: {
		refActivate(item) {
			Helper.refActivate(item)
		}
	}
}
</script>
