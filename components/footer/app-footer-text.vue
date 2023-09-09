<template>
	<div class="footer__copyrights" v-if="value !== ''">
		<div class="container">
			<p v-html="value"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-footer-text',
	props: {
		value: {
			type: String,
			default: ''
		}
	}
}
</script>
