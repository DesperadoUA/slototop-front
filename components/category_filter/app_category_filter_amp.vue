<template>
	<div class="category-filter">
		<div class="category-filter__container container">
			<NuxtLink
				class="category-filter-item"
				v-for="(item, index) in value"
				:key="index"
				:to="`${config.AMP_PREFIX}${item.permalink}`"
				>{{ item.title }}</NuxtLink
			>
		</div>
	</div>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-category-filter_amp',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	mixins: [translateMixin],
	data() {
		return {}
	}
}
</script>
