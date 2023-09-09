<template>
	<div class="casino-card">
		<div class="container casino-card__container">
			<div class="casino-card__logo">
				<amp-img
					:src="value.thumbnail"
					:alt="value.title"
					width="250"
					height="140"
				/>
			</div>

			<div class="casino-card__txt">
				<div class="casino-card__name">
					{{ value.title }}
					<amp-img
						class="casino-card__license"
						width="30"
						height="15"
						src="/img/check.svg"
						alt=""
						v-if="value.licenses.length !== 0"
					/>
					<span
						class="casino-card__license-txt"
						v-if="value.licenses.length !== 0"
						>{{ translates.LICENSE[config.LANG] }}</span
					>
				</div>

				<!--<span class="casino-card__company">(Кинг, Слотокинг Украина)</span> -->

				<a class="casino-card__cta btn-primary" :href="getRef(value)">
					{{ translates.G0_TO_SITE[config.LANG] }}
				</a>
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
	name: 'app-casino-card_amp',
	props: ['value'],
	mixins: [translateMixin],
	data() {
		return {}
	},
	methods: {
		getRef(item) {
			return Helper.getRef(item)
		}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	}
}
</script>
