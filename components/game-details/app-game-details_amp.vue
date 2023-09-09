<template>
	<div class="casino-detail" v-if="value.length !== 0">
		<div class="container">
			<div class="detail-table detail-table--2-col">
				<div class="detail-row">
					<div
						class="detail-row-item"
						v-for="(item, index) in value"
						:key="index"
					>
						<div class="detail-row__heading">
							{{ item.value_1 }}
						</div>

						<div class="detail-row__content">
							<span class="detail-item">{{ item.value_2 }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-game-details',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	data() {
		return {}
	}
}
</script>
