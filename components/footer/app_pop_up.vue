<template>
	<aside class="pop_up" v-if="show">
		<div class="pop_up_container">
			<div class="pop_up_title">{{ title }}</div>
			<div class="pop_up_content" v-html="text"></div>
			<div class="pop_up_btn_wrapper">
				<button class="pop_up_btn" @click="closePopUp">
					{{ btnText }}
				</button>
			</div>
		</div>
	</aside>
</template>
<script>
export default {
	name: 'app-alert_pop_up',
	data() {
		return {
			text: '',
			title: '',
			btnText: '',
			show: false,
			countryCod: ['PL']
		}
	},
	mounted() {
		const storage = localStorage.getItem('alertPopUp')
		if (!storage) {
			const obj = this.$store.getters['common/getHeaders']
			const country = obj['cf-ipcountry'] ? obj['cf-ipcountry'] : 'UA'
			if (this.countryCod.includes(country)) this.show = true
		}
	},
	methods: {
		closePopUp() {
			this.show = false
			localStorage.setItem('alertPopUp', true)
		}
	}
}
</script>
<style lang="scss">
.pop_up {
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: #e5e5e59f;
	z-index: 1000;
}
.pop_up_container {
	width: 476px;
	background: white;
	max-width: 90%;
	margin: 0 auto;
	margin-top: 5%;
	border: 1px solid #f33b68;
	box-shadow: 0px 4px 20px rgba(2, 19, 62, 0.2);
	border-radius: 12px;
	padding: 25px 20px;
	text-align: center;
	color: #4a5767;
}
.pop_up_title {
	font-weight: 900;
	font-size: 20px;
	margin-bottom: 15px;
}
.pop_up_btn {
	width: 280px;
	height: 44px;
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.015em;
	text-transform: uppercase;
	text-align: center;
	background: #3f7df6;
	border-radius: 12px;
	border: 0px solid red;
	cursor: pointer;
}
.pop_up_btn_wrapper {
	margin-top: 20px;
}
</style>
