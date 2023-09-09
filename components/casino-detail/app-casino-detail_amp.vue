<template>
	<div class="casino-detail">
		<div class="container">
			<table class="detail-table">
				<tbody>
					<tr class="detail-row" v-if="value.currency.length !== 0">
						<td class="detail-row__heading">
							{{ translates.CURRENCY[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.currency"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.sub_title }}</NuxtLink
							>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.payments.length !== 0">
						<td class="detail-row__heading">
							{{ translates.PAYMENT_METHODS[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.payments"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.title }}</NuxtLink
							>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.country.length !== 0">
						<th class="detail-row__heading">
							{{ translates.ACCEPTS_PLAYERS[config.LANG] }}
						</th>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item --flag"
								v-for="(item, index) in value.country"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
							>
								<amp-img
									:src="item.thumbnail"
									:alt="item.title"
									width="25"
									height="18"
								/>
							</NuxtLink>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.min_payments !== ''">
						<td class="detail-row__heading">
							{{ translates.MIN_PAYMENT[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.min_payments }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.min_deposit !== ''">
						<td class="detail-row__heading">
							{{ translates.MIN_DEPOSIT[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.min_deposit }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.chat !== ''">
						<td class="detail-row__heading">
							{{ translates.CHAT[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.chat }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.withdrawal !== ''">
						<td class="detail-row__heading">
							{{ translates.WITHDRAWAL[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.withdrawal }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.year !== ''">
						<td class="detail-row__heading">
							{{ translates.YEAR_FOUNDATION[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.year }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.number_games !== ''">
						<td class="detail-row__heading">
							{{ translates.NUMBER_GAMES[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item">{{ value.number_games }}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.licenses.length !== 0">
						<td class="detail-row__heading">
							{{ translates.LICENSE[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.licenses"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.title }}</NuxtLink
							>
						</td>
					</tr>
					<tr class="detail-row">
						<td class="detail-row__heading">
							{{ translates.CONTACTS[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<span class="detail-item" v-if="value.phone !== ''">{{
								value.phone
							}}</span>
							<span class="detail-item" v-if="value.site !== ''">{{
								value.site
							}}</span>
							<span class="detail-item" v-if="value.email !== ''">{{
								value.email
							}}</span>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.vendors.length !== 0">
						<td class="detail-row__heading">
							{{ translates.PLATFORMS[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.vendors"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.title }}</NuxtLink
							>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.technology.length !== 0">
						<td class="detail-row__heading">
							{{ translates.TECHNOLOGY[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.technology"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.title }}</NuxtLink
							>
						</td>
					</tr>
					<tr class="detail-row" v-if="value.language.length !== 0">
						<td class="detail-row__heading">
							{{ translates.LANGUAGES[config.LANG] }}
						</td>

						<td class="detail-row__content">
							<NuxtLink
								class="detail-item"
								v-for="(item, index) in value.language"
								:key="index"
								:to="`${config.AMP_PREFIX}${item.permalink}`"
								>{{ item.title }}</NuxtLink
							>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-casino-detail',
	props: {
		value: {
			type: Object,
			default: {}
		}
	},
	mixins: [translateMixin],
	data() {
		return {}
	}
}
</script>

<style lang="scss"></style>
