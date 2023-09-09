<template>
	<div>
		<section>
			<div class="container error_section">
				<img src="/img/404.png" class="error_img" />
				<div class="error_desc">
					<b>Извините, страница не найдена</b><br />
					Возможно, эта страница была удалена либо допущена ошибка в адресе.
				</div>
				<div class="home_link_wrapper">
					<NuxtLink to="/" class="home_link">Home page</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: ['error'],
	data: () => {
		return {
			data: {
				body: {
					h1: '404 Page not found'
				}
			}
		}
	},
	components: {},
	layout: 'error'
}
</script>
<style scoped>
.error_section {
	text-align: center;
	margin-top: 50px;
	margin-bottom: 50px;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
}
.home_link_wrapper {
	text-decoration: none;
	width: 100%;
}
.home_link {
	margin-top: 50px;
	display: inline-block;
	width: 280px;
	height: 45px;
	background: #3f7df6;
	border-radius: 12px;
	color: white;
	font-family: var(--base-font-family);
	font-weight: bold;
	font-size: 20px;
	text-decoration: none;
	line-height: 45px;
}
.error_desc {
	width: 100%;
	margin-top: 30px;
	font-family: var(--base-font-family);
	margin-bottom: 30px;
	color: #4a5767;
	font-size: 24px;
}
</style>
