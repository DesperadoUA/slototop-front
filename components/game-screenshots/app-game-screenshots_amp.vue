<template>
	<div class="game-screenshots">
		<div class="container">
			<h2 class="game-screenshots__ttl" v-if="title !== ''">
				{{ title }}
			</h2>

			<div class="game-screenshots__container">
				<div
					class="screenshots-item"
					v-for="(item, index) in value"
					:key="index"
				>
					<amp-img :src="item.src" width="385" height="220" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-game-screenshots_amp',
	props: {
		value: {
			type: Array,
			default: []
		},
		title: {
			type: String,
			default: ''
		}
	}
}
</script>
