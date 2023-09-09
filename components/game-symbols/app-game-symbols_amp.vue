<template>
	<div class="game-symbols" v-if="value.length">
		<div class="container">
			<h2 v-if="title.length !== 0">{{ title }}</h2>

			<div class="game-symbols__container">
				<div class="symbols-item" v-for="(item, index) in list" :key="index">
					<amp-img
						class="symbols-item__img"
						:src="item.src"
						alt=""
						width="98"
						height="98"
					/>

					<ul class="symbols-item__txt" v-if="item.value_2.length !== 0">
						<li v-for="(item_1, index_1) in item.value_2" :key="index_1">
							<strong class="mark">{{
								currentValue[index].value_2[index_1]
							}}</strong>
							<span class="dot">&#183;</span>
							{{ currentValue[index].value_3[index_1] }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-game-symbols_amp',
	props: {
		value: {
			type: Array,
			default: []
		},
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			currentValue: []
		}
	},
	computed: {
		list() {
			this.value.forEach(item => {
				if (item.value_2 !== null && item.value_3 !== null) {
					const newArr = item.value_2.split('x')
					newArr.shift()
					const newArrSecond = item.value_3.split('<br>')
					if (newArr.length === newArrSecond.length) {
						this.currentValue.push({
							src: item.src,
							value_1: item.value_1,
							value_2: newArr,
							value_3: newArrSecond
						})
					}
				}
			})
			return this.currentValue
		}
	}
}
</script>
