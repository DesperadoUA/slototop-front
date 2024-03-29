<template>
	<section
		class="faq"
		itemscope
		itemtype="https://schema.org/FAQPage"
		v-if="currentValue.length !== 0"
	>
		<div class="container">
			<h2 class="faq_title">{{ title }}</h2>
		</div>
		<div class="container faq_wrapper">
			<div
				class="faq_row"
				itemscope
				itemprop="mainEntity"
				itemtype="https://schema.org/Question"
				v-for="(item, index) in currentValue"
				:key="index"
			>
				<div
					class="faq_question"
					@click="activate(item)"
					:class="{ faq_active: item.status === 'open' }"
				>
					<span itemprop="name">{{ item.question }}</span>
					<span class="faq_close"></span>
				</div>
				<div
					class="faq_answer"
					:class="{ fadeIn: item.status === 'open' }"
					itemscope
					itemprop="acceptedAnswer"
					itemtype="https://schema.org/Answer"
				>
					<span itemprop="text" v-html="item.answer"></span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'app_faq',
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
	methods: {
		activate(item) {
			item.status === 'close' ? (item.status = 'open') : (item.status = 'close')
		}
	},
	mounted() {
		const faq = []
		this.value.forEach(element => {
			faq.push({
				status: 'close',
				answer: element.value_2,
				question: element.value_1
			})
		})
		this.currentValue = faq
	}
}
</script>
<style lang="scss">
.faq {
	margin-top: 30px;
	margin-bottom: 30px;

	&:last-child {
		@media (min-width: 992px) {
			margin-bottom: 50px;
		}
	}
}

.faq_title {
	font-size: 28px;
	font-weight: 700;
	margin-bottom: 11px;
	color: var(--theme-cr-4);
}

.faq_question {
	transition: var(--transition-default);
	background-color: var(--faq-cr);
	border-radius: 10px;
	padding: 16px 57px 16px 20px;
	margin-top: 2px;
	font-style: normal;
	font-weight: bold;
	color: var(--theme-cr-2);
	position: relative;
	cursor: pointer;
	font-size: 15px;
	line-height: 1.2;

	@media (min-width: 992px) {
		&:hover {
			opacity: 0.85;
		}
	}
}

.faq_answer {
	font: inherit;
	font-size: 14px;
	line-height: 25px;
	color: var(--theme-cr-txt-cms);
	vertical-align: baseline;
	padding: 25px 20px;
	display: none;
	opacity: 0;
	transition: 0.7s;
}

.faq_answer span {
	font-family: var(--font);
}
.faq_close {
	width: 10px;
	height: 10px;
	position: absolute;
	top: 50%;
	right: 34px;
	transition: var(--transition-default);
	border: solid var(--theme-cr-2);
	border-width: 0 2px 2px 0;
	border-radius: 2px;
	transform: rotate(45deg) translateY(-50%) translateY(-3px);
}

.fadeIn {
	display: block;
	opacity: 1;
}

.faq_active .faq_close {
	transform: rotate(45deg) translateY(-50%) translate(2px, -1px) scale(-1);
}

@media (min-width: 320px) and (max-width: 767px) {
	.faq_answer {
		padding: 15px;
	}
}
</style>
