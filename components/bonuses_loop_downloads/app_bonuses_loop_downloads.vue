<template>
	<section class="bonuses-casino">
		<div class="container">
			<div class="bonuses__container">
				<article
					class="bonuses-item"
					v-for="(item, index) in currentPosts"
					:key="index"
				>
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
						<NuxtLink
							no-prefetch
							:to="item.permalink"
							class="hidden-sm bonuses-item__btn btn-secondary"
						>
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
						<span class="bonuses-item__btn fake-btn-secondary" v-else>{{
							translates.BONUS_INVALID[config.LANG]
						}}</span>
					</div>
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
	</section>
</template>

<script>
import { BONUS as NumberPostOnQuery } from '~/config/postLoader'
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_bonuses',
	props: {
		value: {
			type: Array,
			default: []
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
		refActivate(item) {
			Helper.refActivate(item)
		},
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}
</script>
