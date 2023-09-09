<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-nav">
				<NuxtLink
					v-for="(item, index) in footer_menu"
					:key="index"
					:to="`${config.AMP_PREFIX}${item.value_1}`"
					class="footer-nav-link"
					>{{ item.value_2 }}</NuxtLink
				>
			</div>
		</div>
		<div class="partners-logos">
			<div class="container" v-if="partners_menu.length !== 0">
				<ul class="partners-logos__list">
					<li
						class="partners-logos__item"
						v-for="(item, index) in partners_menu"
						:key="index"
					>
						<a :href="item.value_1">
							<amp-img :src="item.src" :width="item.value_2" height="40" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer__copyrights" v-if="footer_text !== ''">
			<div class="container">
				<div v-html="footer_text"></div>
			</div>
		</div>
		<a href="#top" class="go_top">▲</a>
	</footer>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-footer_amp',
	props: {
		footer_menu: {
			type: Array,
			default: []
		},
		footer_text: {
			type: String,
			default: ''
		},
		partners_menu: {
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
