<template>
	<div class="page-banner">
		<div class="page-banner__container">
			<h1 class="page-banner__ttl">{{ title }}</h1>
			<p class="page-banner__txt" v-if="shortDesc !== ''">
				{{ shortDesc }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-page-banner_amp',
	props: {
		title: {
			type: String,
			default: ''
		},
		shortDesc: {
			type: String,
			default: ''
		}
	},
	data() {
		return {}
	}
}
</script>
