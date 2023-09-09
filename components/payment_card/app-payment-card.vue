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
				<span class="casino-card__company" v-if="value.site">{{
					value.site
				}}</span>
			</div>
		</div>
	</div>
</template>
<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-vendor-card',
	props: ['value'],
	data() {
		return {}
	},
	mixins: [translateMixin]
}
</script>

<style lang="scss" scoped>
.casino-card__company {
	color: var(--theme-cr-3);
}
</style>
