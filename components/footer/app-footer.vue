<template>
	<footer class="footer">
		<app_menu :value="changeMenu" />
		<app_partners_menu :value="changePartnersMenu" />
		<app_footer_text :value="changeText" />
		<a href="#top" class="go_top">▲</a>
		<app-pop-up />
        <GuardPopUp v-if="showGuardModal" />
	</footer>
</template>

<script>
import app_menu from './app-footer-menu'
import app_footer_text from './app-footer-text'
import app_partners_menu from './app-partners-menu'
import app_pop_up from './app_pop_up'
import GuardPopUp from '~/components/guard_pop_up'
import { GUARD_MODAL_KEY, GUARD_COOKIE_STORAGE_KEY } from '@/constants.js'
export default {
	name: 'app-footer',
	data() {
		return {
			footer_text: null,
			footer_menu: null,
			partners_menu: null
		}
	},
	components: { app_menu, app_footer_text, app_partners_menu, app_pop_up, GuardPopUp },
	computed: {
		changeText() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_text = settings.filter(
					item => item.key === 'footer_text'
				)[0].value
			}
			return this.footer_text
		},
		changeMenu() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_menu = settings.filter(
					item => item.key === 'footer_menu'
				)[0].value
			}
			return this.footer_menu
		},
		changePartnersMenu() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.partners_menu = settings.filter(
					item => item.key === 'partners_menu'
				)[0].value
			}
			return this.partners_menu
		},
        showGuardModal() {
            return this.$store.getters['modal/getModals'][GUARD_MODAL_KEY]
        }
	},
    mounted() {
        const headers = this.$store.getters['common/getHeaders']
        const cookie = headers.cookie || ''
        const guardHide = !cookie.includes(GUARD_COOKIE_STORAGE_KEY) ? false : true
        if(!guardHide) {
            this.$store.dispatch('modal/setStateModal', { key: GUARD_MODAL_KEY, status: true })
        }
    }
}
</script>

<style lang="scss">
.footer {
	background-color: var(--theme-cr-1);
	color: var(--theme-cr-txt-alt);
	position: relative;
	overflow: hidden;
}

.footer-nav {
	padding-top: 43px;
	display: flex;
	flex-wrap: wrap;
}

.footer-nav-link {
	font-size: 15px;
	line-height: 1.2;
	font-weight: 500;
	color: #fff;
	border: 1px solid rgba(#fff, 0.1);
	border-radius: 8px;
	padding: 4px 16px 6px;
	text-decoration: none;
	margin-right: 4px;
	margin-bottom: 12px;

	@media (min-width: 992px) {
		padding: 2px 16px 4px;

		&:hover {
			border: 1px solid rgba(#fff, 0.8);
		}
	}
}

.partners-logos {
	padding-top: 35px;
	padding-bottom: 39px;
}

.partners-logos__list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-left: -25px;
	margin-right: -25px;
}

.partners-logos__item {
	margin-left: 25px;
	margin-right: 25px;
}

.footer__copyrights {
	border-top: 1px solid rgba(#fff, 0.1);
	padding-top: 20px;
	padding-bottom: 20px;
	font-size: 14px;
	color: rgba(#fff, 0.5);
	text-align: center;

	@media (min-width: 992px) {
		padding-top: 40px;
		padding-bottom: 40px;
		text-align: left;
	}
}
.go_top {
	width: 50px;
	height: 50px;
	background: white;
	border: 3px solid var(--table-head);
	position: fixed;
	right: 0px;
	bottom: 100px;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	z-index: 5;
}
</style>
