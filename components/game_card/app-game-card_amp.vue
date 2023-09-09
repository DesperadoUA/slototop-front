<template>
	<div class="casino-card">
		<div class="container casino-card__container">
			<div class="casino-card__logo">
				<amp-img
					:src="value.thumbnail"
					:alt="value.title"
					width="215"
					height="140"
				/>
			</div>

			<div class="casino-card__txt">
				<div class="casino-card__name">
					{{ value.title }}
				</div>

				<span class="casino-card__company" v-if="value.vendor.length !== 0">{{
					value.vendor[0].title
				}}</span>
				<div class="game_card_btn_wrapper">
					<a
						class="casino-card__cta btn-primary game_card_btn"
						v-if="globalRef"
						:href="getRef(globalRef)"
						>{{ translates.PLAY[config.LANG] }}</a
					>
				</div>
			</div>

			<div class="casino-card__rating">
				<div class="circle-rating">
					<svg
						viewBox="0 0 36 36"
						class="circle-rating__chart"
						:style="value | classRating"
					>
						<path
							class="circle-rating__circle-bg"
							d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<path
							class="circle-rating__circle"
							:stroke-dasharray="value.rating + ', 100'"
							d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
					</svg>
					<div class="circle-rating__percentage">
						{{ value.rating }}
					</div>
					<span class="circle-rating__txt">{{
						translates.RATING[config.LANG]
					}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-game-card_amp',
	props: {
		value: {
			type: Object,
			default: {}
		},
		globalRef: {
			type: Array,
			default: {
				ref: []
			}
		}
	},
	data() {
		return {}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	},
	mixins: [translateMixin],
	methods: {
		getRef(item) {
			return Helper.getRef(item)
		}
	}
}
</script>
<style lang="scss" scoped>
.game_card_btn_wrapper {
	display: flex;
	margin-top: 30px;
	@media (max-width: 767px) {
		flex-wrap: wrap;
		margin-top: 0px;
	}
}
.game_card_btn {
	margin-left: 15px;
	@media (max-width: 767px) {
		margin-left: 0px;
		margin-top: 15px;
	}
}
</style>
