<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
    <main class="main">
    <app_page_banner_amp :title="data.body.h1" :shortDesc="data.body.short_desc" />
    <div class="container">
      <div class="contentEnd">
        <app_author_link_amp 
          :link="config.AUTHOR_PAGE_LINK"
          :text="translates.REVIEW_AUTHOR[config.LANG]"
          :dataTime="data.body.created_at.slice(0, 10)"
          :name="data.body.author_name"
        />
      </div>
    </div>
    <app_breadcrumbs_amp :value="data.body.breadcrumbs" />
    <app_casino_card_amp :value="data.body" />
    <app_close_disclaimer_amp v-if="data.body.close === 1" :value="data.body.title" />
    <app_casino_amp  v-if="data.body.close === 1"
                :value="data.body.casino"
                bg="--bg-gray"
                :title="translates.RECOMMENDED_CASINOS[config.LANG]" 
                :linkText="translates.ALL_CASINO[config.LANG]" 
                link="casino" />
    <app_casino_detail_amp :value="data.body" />
    <app_bonuses_amp :value="data.body.bonuses"
                 :topTextShow="false"
                 :title="`${translates.BONUSES_FROM[config.LANG]} ${data.body.title}`"
                 v-if="data.body.bonuses.length !== 0" />
    <div class="casino_content container">
        <div class="casino_content_left">
          <!-- <app_content :value="data.body.content" v-if="data.body.content !== ''" /> -->
        </div>
        <div class="casino_content_right">
            <app_casino_aside_amp :value="data.body.sidebar" :globalRef="data.body.options['global-ref']" />
        </div>
    </div>
    <app_casino_rating_amp :value="data.body.casinoRating" :title="data.body.title" />
    <app_faq_amp :value="data.body.faq" v-if="data.body.faq.length !== 0" />
    <app_reviews_amp :title="translates.REVIEWS[config.LANG]" :value="data.body.reviews" v-if="data.body.reviews.length !== 0"/>
    <app_slick_button_amp :referal="data.body" />
    </main>
    <app_footer_amp 
            :footer_menu="data.body.settings.footer_menu"
            :footer_text="data.body.settings.footer_text"
            :partners_menu="data.body.settings.partners_menu" 
        />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config'
    import helper from '~/helpers/helpers'
    import app_content from '~/components/content/app-content'
    import app_faq_amp from '~/components/faq/app_faq_amp'
    import app_bonuses_amp from '~/components/bonuses-casino/app_bonuses_casino_amp'
    import app_page_banner_amp from '~/components/page-banner/app_page_banner_amp'
    import app_breadcrumbs_amp from '~/components/breadcrumbs/app_breadcrumbs_amp'
    import app_casino_card_amp from '~/components/casino_card/app-casino-card_amp'
    import app_casino_detail_amp from '~/components/casino-detail/app-casino-detail_amp'
    import app_reviews_amp from '~/components/reviews/app_reviews_amp'
    import app_slick_button_amp from '~/components/slick_button/app_slick_button_amp'
    import app_casino_rating_amp from '~/components/casino_rating/app-casino-rating_amp'
    import app_close_disclaimer_amp from '~/components/close-disclaimer/close-disclaimer_amp'
    import app_casino_amp from '~/components/casino/app_casino_amp'
    import app_casino_aside_amp from '~/components/casino-aside/app_casino_aside_amp'
    import app_author_link_amp from '~/components/author/app-author-link_amp'
    import app_header_amp from '~/components/header/app-header_amp'
    import app_footer_amp from '~/components/footer/app-footer_amp'
    import translateMixin from '~/mixins/translate'

    export default {
        name: "app_single_casino_amp",
        components: {app_content, app_breadcrumbs_amp, app_faq_amp, app_bonuses_amp, app_page_banner_amp, app_reviews_amp, app_casino_aside_amp,
        app_casino_amp, app_author_link_amp, app_casino_card_amp, app_close_disclaimer_amp, app_casino_detail_amp, 
        app_header_amp, app_footer_amp, app_casino_rating_amp, app_slick_button_amp},
        mixins: [translateMixin],
        data: () => {
            return {}
        },
        amp: 'hybrid',
        ampLayout: 'default.amp',
        async asyncData({route, error}) {
            if(route.params.id) {
                const request = new DAL_Builder();
                const response = await request.postType('casino')
                    .url(route.params.id)
                    .get();
                if(response.data.confirm === 'error') {
                    error({ statusCode: 404, message: 'Post not found' })
                }
                else {
                    const data = await helper.globalDataMixin(response, route)
                    data.body.casinoRating = {
                        reliability: data.body.reliability,
                        conveniencePayments: data.body.convenience_payments,
                        interface: data.body.interface,
                        support: data.body.support,
                        popularity: data.body.popularity,
                        shares: data.body.shares,
                    }
                    data.body.breadcrumbs = [
                        {...config.BREADCRUMBS_ROOT[config.LANG]},
                        {...config.BREADCRUMBS_CASINOS[config.LANG]},
                        {title:data.body.title, permalink: ''},
                    ]
                    data.body.options['global-ref'].ref = data.body.options['global-ref']
                    return {data}
                }
            }
            else {
                error({ statusCode: 404, message: 'Post not found' })
            }
           },
        head() {
            return {
                title: this.data.body.meta_title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.data.body.description
                    }
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        }
    }
</script>