<template>
    <div>
        <app_slot_loop_downloads :value="data.body.games"/>
        <app_content :value="data.body.content"/>
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import app_slot_loop_downloads from '~/components/slot_loop_download/'
   import app_content from '~/components/content/app-content'
export default {
    name: "game-page",
    data: () => {
        return {
           
        }
    },
    components: {app_slot_loop_downloads, app_content},
    async asyncData({store, route}) {
        const request = {
            url: 'games'
        };
        const response = await DAL_Page.getData(request);
        const body = response.data;
        const data = body;
        data.body.currentUrl = config.BASE_URL + route.path;
        return {data}
    },
    mounted() {},
    head() {
        return {
            title: this.data.body.meta_title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.data.body.description
                },
            ],
            link: [
                { rel: 'canonical', href: this.data.body.currentUrl}
            ]
        }
    }
}
</script>

<style lang="scss"></style>
