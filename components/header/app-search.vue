<template>
	<div class="search">
		<button
			type="button"
			class="btn-default search__cta"
			@click="searchActivate"
		>
			<svg
				class="search__icon"
				width="19"
				height="19"
				viewBox="0 0 19 19"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="9.0366"
					cy="8.96684"
					r="4.72727"
					transform="rotate(-45 9.0366 8.96684)"
					stroke="#0D2342"
					stroke-width="2"
				/>
				<rect
					x="11.9292"
					y="13.0166"
					width="1.63636"
					height="4.90909"
					rx="0.818182"
					transform="rotate(-45 11.9292 13.0166)"
					fill="#0D2342"
				/>
			</svg>
		</button>

		<div class="search-box" v-if="showSearch">
			<div class="search-box__container">
				<div class="form-search">
					<input
						class="form-search__field"
						type="search"
						v-model="searchWord"
						placeholder="Search"
						v-on:keyup.enter="search"
					/>
					<button
						type="submit"
						class="btn-default form-search__cta"
						@click="search"
					>
						<svg
							class="search__icon"
							width="19"
							height="19"
							viewBox="0 0 345 344.6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M319.3,343.2c-1.6-0.7-21-19.4-43-41.5c-22-22.1-40.3-40.1-40.6-40.1c-0.3,0-4.4,2.5-9,5.6 c-15.4,10.2-32.8,17.5-51.7,21.7c-14.4,3.2-44.3,3.1-59.2-0.1c-28.9-6.3-52.2-19.2-73.6-40.6c-17.7-17.8-27.9-34.4-35.5-57.5 c-5.7-17.3-7.3-30-6.7-50.5c1-29.4,8.1-51.7,24.5-76.5c7.3-11,24.8-29.1,35.9-37C76.2,15.5,97.4,6.2,116.9,2 c12-2.6,44.8-2.7,56.9-0.1c29.9,6.4,53.5,19.1,75.1,40.7c21.4,21.3,34.6,45.9,40.6,75.8c2.7,13.2,2.4,43.3-0.5,56.5 c-4.3,19.3-11.4,36.4-21.6,51.6c-3.1,4.6-5.6,8.6-5.6,9s18.4,19.1,40.9,41.7c44.4,44.5,43.1,42.8,41.8,52.6 C343.1,340.6,329.5,347.8,319.3,343.2L319.3,343.2z M167.2,253c62-11.7,101.5-76.2,84.1-137.2c-11.9-41.6-46.6-72.3-89.2-78.7 c-12.3-1.9-20.2-1.9-32.6,0C105.7,40.7,85.3,51,68.2,68c-52.8,52.6-38.4,142,28.1,175.1C119.4,254.6,141.9,257.8,167.2,253 L167.2,253z"
							/>
						</svg>
					</button>

					<ul class="search-suggest" v-if="posts.length !== 0">
						<li v-for="(item, index) in posts" :key="index" @click="goToSearch">
							<NuxtLink :to="item.permalink">
								<img :src="item.thumbnail" alt="" />
								{{ item.title }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<button
					type="button"
					class="btn-default form-search__close"
					@click="searchActivate"
				>
					<svg
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						viewBox="0 0 22 22"
					>
						<path
							d="M1.1,19.5L19.5,1.1c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L2.5,20.9c-0.4,0.4-1,0.4-1.4,0l0,0 C0.7,20.5,0.7,19.9,1.1,19.5z"
						/>
						<path
							d="M2.5,1.1l18.4,18.4c0.4,0.4,0.4,1,0,1.4l0,0c-0.4,0.4-1,0.4-1.4,0L1.1,2.5c-0.4-0.4-0.4-1,0-1.4l0,0 C1.5,0.7,2.1,0.7,2.5,1.1z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import DAL_Builder from '~/DAL/builder'
export default {
	name: 'app-search',
	data() {
		return {
			posts: [],
			searchWord: ''
		}
	},
	computed: {
		showSearch() {
			return this.$store.getters['common/getShowSearch']
		}
	},
	methods: {
		searchActivate() {
			this.$store.dispatch(
				'common/setShowSearch',
				!this.$store.getters['common/getShowSearch']
			)
		},
		async search() {
			if (this.searchWord === '') return
			const request = new DAL_Builder()
			const response = await request
				.url('search')
				.setSearch(true)
				.searchWold(this.searchWord)
				.get()
			if (response.data.confirm !== 'error') {
				this.posts = response.data.body.posts
			}
		},
		goToSearch() {
			this.$store.dispatch(
				'common/setShowSearch',
				!this.$store.getters['common/getShowSearch']
			)
			this.posts = []
			this.searchWord = ''
		}
	}
}
</script>

<style lang="scss">
.search {
	max-width: 33.3333%;
	margin-left: auto;
}

.search__cta {
	color: var(--theme-cr-2);
	margin-top: 4px;
}

.search__icon {
	color: currentColor;
	fill: none;
}

@keyframes expand {
	from {
		transform: scale(0);
		opacity: 0;
		background: #5470b0;
	}
}

.search-box {
	top: 0;
	left: 0;
	width: 100%;
	position: fixed;
	background-color: rgba(16, 29, 48, 0.9);
	backdrop-filter: blur(15px);
	animation: expand 0.4s ease-in-out;

	@-moz-document url-prefix() {
		background-color: rgba(16, 29, 48, 0.9);
	}
}

.search-box__container {
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--side-gutters);
	padding-right: var(--side-gutters);
	width: 100%;
	max-width: 1218px;
	display: flex;
	align-items: center;
	height: 100vh;
	position: relative;
}

.form-search {
	max-width: 590px;
	margin-left: auto;
	margin-right: auto;
	font-family: var(--base-font-family);
	width: 100%;
	display: flex;
	border-bottom: 1px solid #fff;
	padding-bottom: 7px;
	position: relative;
}

.form-search__field {
	border: 0;
	background-color: transparent;
	font-family: inherit;
	font-size: 24px;
	font-weight: 500;
	color: #fff;
	height: 43px;
	flex: 0 0 91.163%;
	width: 91.163%;
	outline: none;

	&::placeholder {
		color: #fff;
		opacity: 1;
	}
}

.form-search__cta {
	flex-shrink: 0;
	flex-basis: 8.837%;
	width: 8.837%;
	color: #fff;

	@media (min-width: 992px) {
		&:hover {
			color: rgba(#fff, 0.5);
		}
	}

	.search__icon {
		fill: currentColor;
	}
}

.form-search__close.form-search__close {
	position: absolute;
	top: 12.144vh;
	right: 10px;
	fill: rgba(#fff, 0.5);
	padding: 10px;

	@media (min-width: 992px) {
		&:hover {
			fill: #fff;
		}
	}
}

.search-suggest {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	margin: 0;
	padding: 23px 0 0;
	list-style: none;
	color: var(--theme-cr-2);
	font-size: 15px;
	line-height: 1.2;
	font-weight: 500;
	max-height: 222px;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;

	li {
		transition: var(--transition-default);
		background: rgba(#fff, 0.9);
		border-radius: 10px;
		margin-bottom: 4px;
		position: relative;

		@media (min-width: 992px) {
			&:hover {
				background: rgba(#fff, 1);
			}
		}
	}

	img {
		margin-right: 12px;
		border-radius: 8px;
		width: 49px;
	}

	a {
		min-height: 46px;
		padding: 4px 20px 4px 4px;
		color: currentColor;
		display: flex;
		align-items: center;
		text-decoration: none;
	}
}
</style>
