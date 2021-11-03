<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
    import Header from '~/components/header/app-header'
    import Footer from '~/components/footer/app-footer'
    export default {
        name: "app-main",
        components: {Header, Footer}
    }
</script>

<style lang="scss">
:root {
    /* container width */
    --container-width: 1230px;
    --container--cms: 960px;

    /* Theme color */
    --theme-cr-1: #101d30;
    --theme-cr-2: #0d2342;
    --theme-cr-3: #f63f6c;
    --theme-cr-4: #281c4b;
    --theme-cr-5: hsl(334, 83%, 53%);
    --theme-cr-5-darken: hsl(334, 83%, 43%);
    --faq-cr: #e1e6ed;
    --theme-cr-txt: var(--theme-cr-2);
    --theme-cr-txt-alt: #fff;
    --theme-cr-txt-cms: #4a5767;
    --cr-success: #00ff66;
    --btn-primary: #3f7df6;
    --btn-secondary: #01b94a;
    --table-head: #5f63c0;
    --disabled-bg: #fafbfc;
    --disabled-cr: #c7ccd8;
    --page-banner-txt-cr: var(--theme-cr-txt-alt);

    /* Fonts */
    --base-font-size: 14px;
    --base-line-height: 1.7;
    --base-font-family: 'Roboto', Arial, sans-serif;
    --alt-font-family: 'Montserrat', Arial, sans-serif;
    --side-gutters: 15px;

    @media (max-width: 767px) {
        --base-font-size: 15px;
        --side-gutters: 8px;
    }

    /* Theme bg-color */
    --theme-bg-1: #e5e5e5;
    --theme-bg-2: #fff;
    --theme-bg-3: #eef1f9;
    --theme-bg-4: #fbfcff;

    /* Theme images */
    --transition-default: .27s cubic-bezier(0.215, 0.61, 0.355, 1);
}

* {
    box-sizing: border-box
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/roboto.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/roboto-medium.woff2") format("woff2");
    font-weight: 500;
    font-display: swap;
}
@font-face {
    font-family: "Roboto";
    src: url("/fonts/robotobold.woff2") format("woff2");
    font-weight: 700;
    font-display: swap;
}
@font-face {
    font-family: "Roboto";
    src: url("/fonts/roboto-black.woff2") format("woff2");
    font-weight: 900;
    font-display: swap;
}
@font-face {
    font-family: Montserrat;
    src: url("/fonts/montserrat-black.woff2") format("woff2");
    font-weight: 900;
    font-display: swap;
}
body {
    margin: 0;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--base-font-size);
    font-family: var(--base-font-family);
    line-height: var(--base-line-height);
    color: var(--theme-cr-txt);
    background-color: var(--theme-bg-4);
}
a {
    text-decoration: underline;
    color: var(--btn-primary);
    &:not([class]) {
        @media (min-width: 992px) {
            &:hover {
                text-decoration: none;
            }
        }
    }
}
a,
button {
    transition: var(--transition-default);
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
video,
iframe {
    vertical-align: top;
}
strong, b {
    font-weight: 700;
}
.h,
h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5 {
    margin-top: 0;
}
p {
    margin-top: 0;
    margin-bottom: 0;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}
img {
    max-width: 100%;
    height: auto;
}
/*
Common styles*/
.container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
    max-width: var(--container-width);

    &--cms {
        @extend .container;
        max-width: var(--container--cms);
    }
}

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    max-width: 1em;
    flex: 0 0 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
}

.full-width {
    width: 100% !important;
    flex-basis: 100% !important;
    max-width: 100% !important;
}

.items-more {
    width: 100%;
    text-align: center;
    [class*="btn"] {
        min-width: 230px;
    }
}

.main {
    overflow: hidden;
    position: relative;
    padding-top: 64px;
    background-position: 50% 0;
    background-repeat: no-repeat;

    @media (min-width: 992px) {
        padding-top: 92px;
    }
}

/*
Buttons */
%btn-general {
    font-family: var(--base-font-family);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 0;
}

.btn-default {
    @extend %btn-general;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
    position: relative;
    padding: 0;
}

.btn-primary {
    @extend %btn-general;
    font-size: 14px;
    line-height: 1.286;
    text-transform: uppercase;
    font-weight: 700;
    background-color: var(--btn-primary);
    border-radius: 12px;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 44px;
    padding: 6px .9em 4px;

    @media (min-width: 992px) {
        &:hover {
            background-color: #0475dd;
        }
    }
    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 44px;
        }
    }
    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }
}

[class*="btn"][disabled] {
    pointer-events: none;
}

.btn-secondary {
    @extend %btn-general;
    border: 1px solid var(--theme-cr-3);
    font-size: 14px;
    border-radius: 12px;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: var(--theme-cr-2);
    min-height: 44px;
    padding: 6px .9em 4px;

    @media (min-width: 992px) {
        &:hover {
            background-color: var(--theme-cr-3);
            color: #fff;
        }
    }
    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 50px;
        }
    }
    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }
}

.btn-tertiary {
    min-width: 256px;
    @extend %btn-general;
    font-size: 15px;
    border-radius: 10px;
    font-weight: 900;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 44px;
    padding: 5px .9em;

    &.--reel {
        background-color: var(--theme-cr-5);

        @media (min-width: 992px) {
            &:hover {
                background-color: var(--theme-cr-5-darken);
            }
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 50px;
        }
    }
}

.btn-block {
    display: flex;
    width: 100%;
}

.btn-play {
    @extend %btn-general;
    z-index: 1;
    min-width: 113px;
    background-color: var(--theme-cr-3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    min-height: 42px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(102.49deg, #eb2757 14.95%, #e31949 84.16%), linear-gradient(92.08deg, #446dff 0%, #4200ff 98.48%), #3f7df6;
        transition: var(--transition-default);
        border-radius: 12px;
        opacity: 0;
        z-index: -1;
    }

    @media (min-width: 992px) {
        &:hover {
            &:after {
                opacity: 1;
            }
        }
    }
}

.btn-play-video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(#fff, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    cursor: pointer;
    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#000, .3);
        }
    }
}

.link-primary {
    color: var(--theme-cr-3);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;

    @media (min-width: 992px) {
        &:hover {
            text-decoration: underline;
        }
    }
}

/*
Circle rating */

.circle-rating {
    position: relative;
    flex-shrink: 0;
    flex-basis: 106px;
    width: 106px;
    height: 106px;
    margin-bottom: 5px;
    z-index: 0;

    &:after {
        content: '';
        position: absolute;
        left: 4px;
        right: 4px;
        top: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: #fff;
        z-index: -1;
    }
}

.circle-rating__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 50%;
    width: 62px;
    height: 62px;
}

.circle-rating__chart {
    display: block;
    border-radius: 50%;
}

.circle-rating__circle-bg {
    fill: none;
    opacity: .23;
    stroke: var(--cr-rating);
    stroke-width: 2;
}

.circle-rating__circle {
    fill: none;
    stroke: var(--cr-rating);
    stroke-width: 2;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
}

@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}

.circle-rating__percentage {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateY(-6px);
    font-weight: 800;
    font-size: 32px;
    line-height: 1;
    text-anchor: middle;
    color: var(--theme-cr-2);
}

.circle-rating__txt {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateY(14px);
    font-size: 10px;
    color: #4d5a6a;
    font-weight: 500;
}

/*
Casino Card*/
.casino-cards-container {
    @media (max-width: 1279px) {
        --casino-card-width: 33.333%;
        --casino-card-gutter: 20px;
        max-width: calc(var(--container-width) + var(--casino-card-gutter));
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 991px) {
        --casino-card-width: 50%;
    }

    @media (max-width: 599px) {
        --casino-card-width: 100%;
        --casino-card-gutter: 0px;
    }

    .casino-card {
        flex-shrink: 0;
        flex-basis: calc(var(--casino-card-width) - var(--casino-card-gutter));
        width: calc(var(--casino-card-width) - var(--casino-card-gutter));
        margin-left: calc(var(--casino-card-gutter) / 2);
        margin-right: calc(var(--casino-card-gutter) / 2);
    }
}

.casino-card {
    padding-top: 10px;
    padding-bottom: 46px;
    background-color: var(--theme-bg-3);
}

.casino-card__container {
    display: flex;
    align-items: center;

    @media (max-width: 1279px) {
        flex-wrap: wrap;
    }
}

.casino-card__logo {
    align-self: flex-start;
    overflow: hidden;
    border-radius: 8px;
    margin-right: 19px;
    width: 100%;

    @media (max-width: 1279px) {
        flex-shrink: 0;
        margin-right: 0;
        position: relative;
    }

    @media (max-width: 991px) {
        margin-bottom: 20px;
    }

    @media (min-width: 992px) {
        flex: 0 0 214px;
        max-width: 214px;
    }

    img {
        width: 100%;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 8px;
        display: block;

        @media (max-width: 1279px) {
            height: auto;
            object-fit: cover;
        }

        @media (max-width: 768px) {
           border-radius: 0;
        }
    }
}

.casino-card__name {
    font-size: 24px;
    line-height: 1.167;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 9px;
    color: var(--theme-cr-2);
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
        margin-left: 7px;
    }
}

.casino-card__license {
    margin-left: 19px !important;
    margin-right: 11px;
}

.casino-card__license-txt {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #4d5a6a;
    margin-left: 5px;
}

.casino-card__company {
    font-size: 15px;
    line-height: 1.2;
    color: var(--theme-cr-txt-cms);
    margin-bottom: 20px;

    @media (min-width: 992px) {
        margin-bottom: 33px;
    }
}

.casino-card__rating {
    flex: 0 0 106px;
    max-width: 106px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -32px;

    @media (max-width: 1279px) {
        width: 112px;
        border-radius: 0 14px 0 0;
        padding-top: 15px;
        max-width: 112px;
        margin-top: 0;
    }
}

.casino-card-param {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 0 0 188px;
    max-width: 188px;

    @media (max-width: 1279px) {
        width: 100%;
        max-width: none;
        flex: 0 0 100%;
    }
}

.casino_card_link {
    text-align: center;
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
}

.casino-card-param__item {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

    &:first-child,
    &:nth-child(2) {
        margin-bottom: 20px;
    }

    &.disabled {
        opacity: .5;
    }

    @media (max-width: 1279px) {
        margin-bottom: 0 !important;
        padding: 20px 5px;
        flex: 0 0 25%;
    }
}

.casino-card-param__img {
    margin-bottom: 2px;
    max-width: 21px;
}

.casino-card-param__value {
    font-size: 26px;
    line-height: 1;
    font-weight: 700;
}

.casino-card-param__txt {
    font-size: 10px;
    font-weight: 700;
    opacity: .75;
}

.casino-card-bonus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 700;
    min-width: 130px;
    border-radius: 6px;
    text-align: center;

    @media (max-width: 1279px) {
        max-width: calc(50% - 8px);
        flex-basis: calc(50% - 8px);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        font-weight: 700;
        background-color: rgba(#fff, .1);
        border-radius: 6px;
        text-align: center;
        padding-top: 18px;
        padding-bottom: 18px;
        margin-left: 4px;
        margin-right: 4px;
        margin-bottom: 25px;
    }
}

.casino-card-bonus__value {
    font-size: 22px;
    line-height: 1.25;
    padding-left: 10px;
    padding-right: 10px;
}

.casino-card-bonus__ttl {
    font-size: 11px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
}

.casino-card-bonus__wager {
    opacity: .75;
    font-size: 12px;
    line-height: 25px;
}

.casino-card__cta {
    flex-shrink: 0;
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1279px) {
        padding-left: 0;
    }

    [class*="btn"] + [class*="btn"] {
        margin-top: 6px;

        @media (max-width: 1279px) {
            margin-top: 0;
            border-radius: 0 0 15px 15px;
        }
    }

    a {
        @media (max-width: 1279px) {
            border-radius: 0;
        }
    }
}

.casino-card__txt {
    line-height: 1.8125;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    @media (min-width: 992px) {
        margin-left: 16px;
    }

    ul {
        margin-bottom: 10px;

        li {
            padding-left: 25px;
            position: relative;

            &:before {
                position: absolute;
                top: 14px;
                left: 5px;
                content: '';
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: currentColor;
            }
        }
    }

    ol {
        counter-reset: counter;
        margin-bottom: 10px;

        li {
            counter-increment: counter;

            &:before {
                content: counter(counter) '.';
                margin-right: 7px;
            }
        }
    }

    a {
        color: currentColor;
    }
}

.casino-card__more {
    margin-top: 45px;
    margin-bottom: 80px;
}

/*
 */
.casino-group-item {
    background-color: rgba(#fff, .1);
    border-radius: 10px;
    padding: 6px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.072;
    color: currentColor;
    text-decoration: none;
    margin-bottom: 8px;
    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#000, .1);
        }
    }

    .circle-rating {
        margin-right: 16px;
        margin-bottom: 0;
    }
}

.casino-group-item__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
}

.casino-group-item__name {
    line-height: 1.643;
    font-weight: 700;
}

/*
Blog */
.blog {
    --blog-item-gutters: 45px;
    --blog-item-max-width: 344px;
    --blog-item-width: 100%;
    @media (min-width: 768px) {
        --blog-item-width: 50%;
    }
    @media (min-width: 1180px) {
        --blog-item-width: 33.333%;
    }

    .items__cta {
        margin-bottom: 46px;
    }
}

.blog__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: calc(var(--blog-item-gutters) / -2);
    margin-right: calc(var(--blog-item-gutters) / -2);
    @media (min-width: 768px) {
        justify-content: space-between;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .blog-item {
        max-width: var(--blog-item-max-width);
        flex-basis: calc(var(--blog-item-width) - var(--blog-item-gutters));
        margin-left: calc(var(--blog-item-gutters) / 2);
        margin-right: calc(var(--blog-item-gutters) / 2);
        flex-shrink: 0;
    }
}

.blog-item {
    display: flex;
    flex-direction: column;
    color: var(--theme-cr-txt-alt);
    text-decoration: none;

    &:not(:last-child) {
        margin-bottom: 32px;
    }

    @media (min-width: 992px) {
        &:hover {
            .blog-item__media img {
                transform: scale(1);
            }
        }
    }
}

.blog-item__media {
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin-bottom: 17px;

    img {
        transition: var(--transition-default);
        transform: scale(1.1);
    }
}

.blog-item__caption {
    font-size: 14px;
    line-height: 118.7%;
    font-weight: 700;
    padding-bottom: 16px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        height: 1px;
        left: 8px;
        right: 8px;
        top: 100%;
        background-color: rgba(#fff, 0.1);
    }
}

/*
Casino Detail*/
.casino-detail {
    --heading-col-width: 246px;
    --detail-ttl-width: 139px;
    padding-top: 30px;
    padding-bottom: 15px;
    background-color: #fff;
    display: flow-root;

    @media (min-width: 992px) {
        padding-top: 50px;
        padding-bottom: 30px;
    }
}

.detail-row {
    display: flex;
    flex-wrap: wrap;
}

.detail-row__heading {
    margin-bottom: 20px;
    padding-top: 5px;
    padding-right: 10px;

    @media (min-width: 768px) {
        flex: 0 0 var(--heading-col-width);
        max-width: var(--heading-col-width);
    }
}

.detail-row__ttl {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.detail-row__sub-ttl {
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0;
}

.detail-row__content {
    margin-bottom: 16px;
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-left: auto;
        width: calc(100% - var(--heading-col-width));
    }
}

.detail-list {
    margin: 0 0 -12px;
    padding: 0;
    list-style: none;
    width: 100%;
    line-height: 1.375;
    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
    }

    &.--stack {
        .detail-list__item {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
}

.detail-list__item {
    padding-right: 10px;
    display: flex;
    margin-bottom: 12px;

    @media (min-width: 992px) {
        flex: 0 0 43%;
        max-width: 43%;
    }
}

.detail-list__ttl {
    flex: 0 0 var(--detail-ttl-width);
    padding-right: 5px;
}

.detail-list__value {
    flex-shrink: 0;
    font-weight: 700;
    flex-basis: calc(100% - var(--detail-ttl-width));
}

.detail-item {
    display: inline-flex;
    align-items: center;
    color: var(--theme-cr-2);
    font-weight: 700;
    font-size: 11px;
    line-height: 14px;
    padding: 5px 8px;
    margin-bottom: 4px;
    margin-right: 4px;
    min-height: 24px;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(13, 35, 66, .1);
    text-decoration: none;

    &.--flag {
        padding: 0;
        border-radius: 5px;
        min-height: 18px;
        box-shadow: none;
        border: 1px solid #cfd5e1;

        img {
            max-height: 18px;
        }
    }

    &.--payment {
        box-shadow: inset 0 0 0 1px #3ff6bf;
    }
}

button.detail-item,
a.detail-item {
    color: var(--btn-primary);

    @media screen and (min-width: 992px) {
        &:hover {
            box-shadow: inset 0 0 0 1px var(--btn-primary);
        }
    }
}

.detail-item__icon {
    margin-right: 10px;
    margin-left: 4px;
}

.game-type {
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    min-height: 40px;
    padding: 6px 12px;
    background: rgba(#0f0038, .7);
    border-radius: 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-decoration: none;
}

.game-type__icon {
    margin-right: 10px;
    margin-left: 4px;

    path {
        fill: currentColor;
    }
}

/*
Casinos */
.casinos {
    --casino-item-width: 100%;
    --casino-item-gutter: 0px;
    @media (min-width: 600px) {
        --casino-item-width: 50%;
        --casino-item-gutter: 20px;
    }
    @media (min-width: 992px) {
        --casino-item-width: 33.333%;
    }
    @media (min-width: 1280px) {
        --casino-item-gutter: 46px;
    }

    .items-more {
        margin-bottom: 56px;
    }
}

.casinos__container {
    display: flex;
    flex-wrap: wrap;
    counter-reset: counter;
    margin-left: calc(var(--casino-item-gutter) / -2);
    margin-right: calc(var(--casino-item-gutter) / -2);
    margin-bottom: 16px;
    @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .casino-item {
        flex-shrink: 0;
        flex-basis: calc(var(--casino-item-width) - var(--casino-item-gutter));
        width: calc(var(--casino-item-width) - var(--casino-item-gutter));
        margin-left: calc(var(--casino-item-gutter) / 2);
        margin-right: calc(var(--casino-item-gutter) / 2);
        position: relative;
        counter-increment: counter;

        &:before {
            content: counter(counter);
            position: absolute;
            z-index: 2;
            border-radius: 50%;
            text-align: center;
            width: 25px;
            height: 25px;
            background: rgba(#000, .35);
            font-size: 12px;
            line-height: 25px;
            font-weight: 700;
            color: #fff;
            top: 7px;
            left: 7px;
        }
    }
}

.casino-item {
    color: #fff;
    background: rgba(#000, .2);
    border: 1px solid rgba(#fff, .1);
    border-radius: 14px;
    margin-bottom: 31px;
    /*max-width: 344px;
    width: 100%;*/
}

.casino-item__top {
    display: flex;
    margin-bottom: 18px;
}

.casino-item__logo {
    background-color: #1c0e27;
    overflow: hidden;
    border-radius: 14px 0 0 0;
    flex-shrink: 0;
    flex-basis: calc(100% - 112px);
    padding-bottom: 38.13%;
    position: relative;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        max-width: none;
        object-fit: cover;
    }
}

.casino-item__rating {
    width: 112px;
    border-radius: 0 14px 0px 0;
    background-color: #1c0e27;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
}

.casinos-rating__txt {
    font-size: 14px;
}

.casino-item__content {
    padding-left: 8px;
    padding-right: 8px;
}

.casino-param {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
}

.casino-param__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

    &.disabled {
        opacity: .5;
    }
}

.casino-param__img {
    margin-bottom: 2px;
    max-width: 21px;
}

.casino-param__txt {
    font-size: 10px;
    font-weight: 700;
    opacity: .75;
}

.casino-bonuses {
    display: flex;
    justify-content: space-between;
    margin-left: -4px;
    margin-right: -4px;
    margin-bottom: 28px;

    .casino-bonus {
        max-width: calc(50% - 8px);
        flex-basis: calc(50% - 8px);
    }
}

.casino-bonus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 700;
    max-width: 160px;
    background-color: rgba(#fff, .1);
    border-radius: 6px;
    text-align: center;
    padding-top: 18px;
}

.casino-bonus__value {
    font-size: 22px;
    line-height: 1.5;
    padding-left: 10px;
    padding-right: 10px;
}

.casino-bonus__ttl {
    font-size: 11px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
}

.casino-bonus__wager {
    background-color: rgba(#fff, .2);
    font-size: 12px;
    line-height: 25px;
    border-radius: 0 0 6px 6px;
    margin-top: auto;
}

.casino-item__btns {
    margin-left: -9px;
    margin-right: -9px;
    overflow: hidden;
    border-radius: 0 0 14px 14px;
}

.casino-item__btn {
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    text-decoration: none;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background-color: var(--btn-primary);

        &:hover {
            background-color: #0475dd;
        }
    }
}

// Useful Categories
.useful-categories {
    --news-img-width: 200px;
    --useful-categories-gutters: 45px;
    --useful-categories-max-width: 344px;
    --useful-categories-width: 344px;
    display: flow-root;
    margin-bottom: 25px;
    @media (min-width: 768px) {
        --useful-categories-width: 50%;
    }
    @media (min-width: 1180px) {
        --useful-categories-width: 33.333%;
    }

    .items-more {
        margin-top: 45px;
        margin-bottom: 30px;
    }
}

.useful-categories__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: calc(var(--useful-categories-gutters) / -2);
    margin-right: calc(var(--useful-categories-gutters) / -2);
    @media (min-width: 768px) {
        justify-content: space-between;
    }
    @media (max-width: 767px) {
        margin-left: 0;
        margin-right: 0;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .useful-group {
        max-width: var(--useful-categories-max-width);
        flex-basis: calc(var(--useful-categories-width) - var(--useful-categories-gutters));
        margin-left: calc(var(--useful-categories-gutters) / 2);
        margin-right: calc(var(--useful-categories-gutters) / 2);
        flex-shrink: 0;
        @media (max-width: 767px) {
            flex-basis: 100%;
        }
        @media (min-width: 768px) and (max-width: 1000px) {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
}

.useful-group {
    padding-top: 24px;
    margin-bottom: 30px;
    box-sizing: border-box;
}

.useful-group__ttl {
    font-size: 28px;
    line-height: 1.833;
    color: var(--theme-cr-txt-alt);
    font-weight: 700;
    margin-bottom: 20px;
}

.news-item {
    padding: 16px;
    background-color: rgba(#fff, .1);
    font-size: 14px;
    line-height: 160%;
    border-radius: 10px;
    color: rgba(#fff, .75);
    text-decoration: none;
    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#000, .1);
        }
    }
    @media (max-width: 767px) {
        & {
            display: block;
        }
    }
    @media (min-width: 768px) and (max-width: 1000px) {
        flex-basis: 100%;
        max-width: 100%;
        display: flex;
    }
}

.useful-categories__container .news-item__date {
    @media (min-width: 768px) and (max-width: 1000px) {
        width: auto;
        padding: 0 15px;
    }
}

.useful-categories__container .useful-group {
    @media (min-width: 768px) and (max-width: 1000px) {
        margin-left: 25px;
        margin-right: 25px;
    }
}

.useful-categories .useful-categories__container {
    @media (min-width: 768px) and (max-width: 1000px) {
        max-width: 100%;
    }
}

.news-item__img {
    flex-shrink: 0;
    flex-basis: var(--news-img-width);
    max-width: var(--news-img-width);
    margin: -8px 0 -8px -8px;

    ~ .news-item__txt {
        padding-top: 2px;
        align-content: baseline;
        flex-direction: row;
        flex-wrap: wrap;
        @media (min-width: 992px) {
            padding-left: 24px;
            max-width: calc(100% - var(--news-img-width));
            flex-basis: calc(100% - var(--news-img-width));
        }

        .news-item__date {
            line-height: 118.7%;
            width: auto;
            margin-bottom: 10px;
            margin-left: auto;
        }

        .news-item__ttl {
            order: -1;
            margin-bottom: 10px;
        }
    }
}

.news-item__ttl {
    color: #fff;
    line-height: 118.7%;
    margin-bottom: 5px;
}

.news-item__txt {
    display: flex;
    flex-direction: column;

    p {
        width: 100%;
        max-width: 730px;
    }
}

.news-item__date {
    width: 100%;
    font-weight: 400;
    opacity: .75;
    margin-bottom: 5px;
}

.single_template {
    @media (max-width: 767px) {
        & .casino-card__logo {
            flex-basis: 100%;
            max-width: 100%;
            overflow: hidden;
            width: 100%;
            padding-bottom: 0;
        }
        & .casino-card__logo img {
            max-height: none;
            border-radius: 15px 15px 0 0;
            position: relative;
        }
    }

    & .casino-card__logo {
        @media (min-width: 767px) and (max-width: 1200px) {
            flex-basis: 100%;
            border-radius: 14px 14px 0 0;
            padding-bottom: 0;
        }
    }
}

.slots {
    --slots-width: 224px;
    --slots-gutter: 20px;
    background-color: var(--theme-bg-3);
    padding-bottom: 6px;

    .main-banner + & {
        padding-top: 28px;

        .slots__ttl {
            font-size: 26px;

            @media (min-width: 992px) {
                font-size: 32px;
            }
        }
    }

    .casinos + & {
        padding-top: 40px;
    }
}

.slots__heading {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 5px;

    @media (min-width: 768px) {
        justify-content: space-between;
    }

    .link-primary {
        @media (max-width: 767px) {
            display: none;
        }
    }
}

.slots__ttl {
    font-size: 20px;
    line-height: 1.358;
    font-weight: 900;
    margin-bottom: 0;

    @media (min-width: 992px) {
        font-size: 24px;
    }
}

.slots__container {
    padding-top: 50px;
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    margin-left: calc(var(--slots-gutter) / -2);
    margin-right: calc(var(--slots-gutter) / -2);

    .slots__heading + & {
        padding-top: 6px;
    }

    @media (max-width: 1229px) {
        margin-right: calc(var(--side-gutters) * -1);
    }
    @media (min-width: 1366px) {
        flex-wrap: wrap;
    }

    &:after {
        content: '';
        flex: auto;
    }

    .slot-item {
        flex-shrink: 0;
        flex-basis: var(--slots-width);
        margin-left: calc(var(--slots-gutter) / 2);
        margin-right: calc(var(--slots-gutter) / 2);
        position: relative;
    }
}

.slot-item {
    background-color: #fff;
    width: var(--slots-width);
    min-height: 260px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    color: currentColor;
    text-decoration: none;
    transition: var(--transition-default);
    box-shadow: 0 8px 15px rgba(#02133e, .2);

    @media (min-width: 992px) {
        &:hover {
            box-shadow: none;
        }
    }
}

.slot-item__logo {
    overflow: hidden;
    margin-bottom: 11px;
    padding: 5px;

    img {
        width: 100%;
        border-radius: 8px;
    }
}

.slot-item__casino-name {
    font-size: 18px;
    line-height: 1.389;
    font-weight: 700;
    text-align: center;
}

.slot-item__content {
    font-size: 14px;
    line-height: 1.357;
    text-align: center;
    margin-bottom: 17px;
    padding-left: 8px;
    padding-right: 8px;
}

.slot-item__txt {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.slot-item__name {
    font-weight: 700;
    font-size: 15px;
    line-height: 1.389;
    margin-bottom: 3px;
    display: inline-flex;
    align-items: center;

    img {
        margin-left: 7px;
    }
}

.slot-item__stats {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.slot-item__divider {
    width: 1px;
    height: 23px;
    background: rgba(#281c4b, .2);
    border-radius: 1px;
    margin-left: 8px;
    margin-right: 8px;
}

.slot-item__stats-val {
    color: var(--theme-cr-txt-cms);
    margin-left: 7px;
    margin-bottom: -3px;
    font-size: 12px;
}

.slot-item__btns {
    margin-top: auto;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
    padding: 0 1px 1px;
}

.slot-item__btn {
    position: relative;
    z-index: 1;
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 14px;
    font-weight: 700;
    min-height: 42px;
    text-decoration: none;
    text-transform: uppercase;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 9px 9px;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background-color: var(--btn-primary);

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: var(--transition-default);
            border-radius: 0 0 9px 9px;
            background:
                linear-gradient(0deg, rgba(#000, .1), rgba(#000, .1)),
                linear-gradient(92.08deg, #446dff 0%, #4200ff 98.48%), #3f7df6;
            z-index: -1;
            opacity: 0;
        }

        &:hover {
            &:after {
                content: '';
                opacity: 1;
            }
        }
    }
}

.star-rating {
    background-image: url(/img/stars.png);
    background-repeat: no-repeat;
    background-position: 0 -20px;
    width: 90px;
    height: 17px;
}

.star-rating__val {
    background-image: url(/img/stars.png);
    background-repeat: no-repeat;
    height: 100%;
    display: block;
}

.flex-wrap {
    flex-wrap: wrap !important;
}

.games {
    --games-width: 224px;
    --games-gutter: 20px;
    background-color: var(--theme-bg-2);
    padding-top: 47px;
    padding-bottom: 17px;

    @media (max-width: 1229px) {
        padding-top: 32px;
    }

    & + & {
        padding-top: 10px;
        padding-bottom: 40px;

        @media (min-width: 992px) {
            padding-bottom: 61px;
        }
    }

    .slots__heading {
        margin-bottom: 19px;
    }
}

.games__container {
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    margin-left: calc(var(--games-gutter) / -2);
    margin-right: calc(var(--games-gutter) / -2);

    @media (max-width: 1229px) {
        margin-right: calc(var(--side-gutters) * -1);
    }


    &:after {
        content: '';
        flex: auto;
    }

    .game-item {
        flex-shrink: 0;
        flex-basis: var(--games-width);
        margin-left: calc(var(--games-gutter) / 2);
        margin-right: calc(var(--games-gutter) / 2);
        position: relative;
    }
}

.game-item {
    background-color: #fff;
    width: var(--games-width);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    color: currentColor;
    text-decoration: none;
    position: relative;

    @media (min-width: 992px) {
        &:hover {
            .game-item__hover {
                opacity: 1;
                pointer-events: auto;
            }
        }
    }
}

.game-item__logo {
    overflow: hidden;
    border-radius: 10px;
    background-color: #000;

    img {
        width: 100%;
        vertical-align: top;
    }
}

.game-item__hover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, .6);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 14px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: var(--transition-default);
    opacity: 0;
    pointer-events: none;
}

.game-item__name {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    margin-bottom: 3px;
}

.game-item__category {
    color: rgba(#fff, .78);
    text-shadow: 0 1px 3px rgba(#000, .5);
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 16px;
}



.bonuses-casino {
    --bonuses-width: 50%;
    --bonuses-gutter: 20px;
    background-color: var(--theme-bg-3);
    padding-top: 32px;
    padding-bottom: 33px;

    @media (min-width: 992px) {
        padding-top: 50px;
        padding-bottom: 44px;
    }
}

.badge-top {
    background-color: #3ff6bf;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: var(--alt-font-family);
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    padding: 11px 11px 9px;
    color: var(--theme-cr-2);
    display: inline-block;
    margin-right: 12px;
}

.bonuses-casino__heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .link-primary {
        margin-left: auto;
    }
}

.bonuses-casino__ttl {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 900;
    margin-bottom: 0;
    padding-bottom: 3px;
    @media (min-width: 992px) {
        font-size: 24px;
    }
}

.bonuses__container {
    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: calc(var(--bonuses-gutter) / -2);
        margin-right: calc(var(--bonuses-gutter) / -2);
    }

    .bonuses-item {
        margin-bottom: 17px;

        @media (min-width: 992px) {
            flex-shrink: 0;
            flex-basis: calc(var(--bonuses-width) - var(--bonuses-gutter));
            margin-left: calc(var(--bonuses-gutter) / 2);
            margin-right: calc(var(--bonuses-gutter) / 2);
            margin-bottom: 26px;
        }
    }
}

.bonuses-item {
    background-color: #fff;
    box-shadow: 0 4px 20px rgba(#02133e, .2);
    border-radius: 10px;
    padding: 10px 10px 16px;
    display: grid;
    grid-template-areas:"bonuses-logo bonuses-name"
                        "bonuses-val bonuses-val"
                        "bonuses-tags bonuses-tags"
                        "bonuses-btns bonuses-btns";
    grid-template-columns: 152px 1fr;

    @media (min-width: 992px) {
        grid-template-areas:"bonuses-logo bonuses-name"
                            "bonuses-logo bonuses-val"
                            "bonuses-tags bonuses-tags"
                            "bonuses-btns bonuses-btns";
        grid-template-columns: 158px 1fr;
    }
}

.bonuses-item__logo {
    grid-area: bonuses-logo;
    margin-bottom: 16px;
    overflow: hidden;
    padding-right: 18px;

    img {
        border-radius: 8px;
    }
}

.bonuses-item__name {
    grid-area: bonuses-name;
    align-self: center;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 16px;
    line-height: 1.167;
    letter-spacing: 0.015em;

    @media (min-width: 992px) {
        align-self: end;
        margin-bottom: 7px;
        font-size: 18px;
    }
}

.bonuses-item__val {
    grid-area: bonuses-val;
    align-self: center;
    font-family: var(--alt-font-family);
    font-weight: 900;
    font-size: 28px;
    line-height: 1.219;
    color: var(--theme-cr-3);
    margin-bottom: 11px;

    @media (min-width: 992px) {
        margin-bottom: 16px;
    }
}

.bonuses-tags {
    grid-area: bonuses-tags;
}

.bonuses-tag {
    font-size: 11px;
    height: 24px;
    font-weight: 700;
    color: var(--theme-cr-2);
    text-decoration: none;
    padding: 5px 8px;
    border: 1px solid rgba(#0d2342, .1);
    box-sizing: border-box;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    @media (min-width: 992px) {
        &:hover {
            border: 1px solid rgba(#0d2342, .5);
        }
    }
}

.bonuses-item__btns {
    grid-area: bonuses-btns;

    @media (min-width: 992px) {
        --btn-width: 50%;
        --btn-gutter: 10px;
        display: flex;
        margin-left: calc(var(--btn-gutter) / -2);
        margin-right: calc(var(--btn-gutter) / -2);
    }

    .bonuses-item__btn {
        width: 100%;

        @media (min-width: 992px) {
            box-sizing: border-box;
            flex-shrink: 0;
            flex-basis: calc(var(--btn-width) - var(--btn-gutter));
            margin-left: calc(var(--btn-gutter) / 2);
            margin-right: calc(var(--btn-gutter) / 2);
        }
    }
}

.hidden-sm {
    @media (max-width: 991px) {
        display: none;
    }
}

</style>
