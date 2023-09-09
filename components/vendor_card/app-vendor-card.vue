<template>
	<div class="casino-card">
		<div class="container casino-card__container">
			<div class="casino-card__logo">
				<img :src="value.thumbnail" :alt="value.title" />
			</div>

			<div class="casino-card__txt">
				<div class="casino-card__name">
					{{ value.title }}
				</div>

				<div class="detail-table detail-table--2-col">
					<div class="detail-row">
						<div class="detail-row-item" v-if="value.country.length !== 0">
							<div class="detail-row__heading">
								{{ translates.COUNTRY_REPRESENTATIVE[config.LANG] }}
							</div>

							<div class="detail-row__content">
								<NuxtLink
									class="detail-item"
									:to="value.country[0].permalink"
									>{{ value.country[0].title }}</NuxtLink
								>
							</div>
						</div>

						<div class="detail-row-item" v-if="value.year !== ''">
							<div class="detail-row__heading">
								{{ translates.YEAR_FOUNDATION[config.LANG] }}
							</div>

							<div class="detail-row__content">
								<span class="detail-item">{{ value.year }}</span>
							</div>
						</div>

						<div class="detail-row-item" v-if="value.number_games !== ''">
							<div class="detail-row__heading">
								{{ translates.NUMBER_GAMES[config.LANG] }}
							</div>

							<div class="detail-row__content">
								<span class="detail-item">{{ value.number_games }}</span>
							</div>
						</div>
					</div>
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
	name: 'app-vendor-card',
	props: ['value'],
	mixins: [translateMixin],
	data() {
		return {}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	}
}
</script>

<style lang="scss"></style>
