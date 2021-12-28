<template>
    <section class="cms" v-if="value!==''">
        <article class="container" v-html="value"></article>
    </section>
</template>

<script>
    export default {
        name: "app-content",
        props: ['value'],
        data(){
            return {

            }
        },
        mounted(){
            const main = document.querySelector('.cms')
            const menu = main.querySelector('.nav')
            if(menu) {
                const arrH = []
                const h2 = main.querySelectorAll('h2')
                h2.forEach(item => {
                    arrH.push(item)
                })
                const h3 = main.querySelectorAll('h3')
                h3.forEach(item => {
                    arrH.push(item)
                })
                const h4 = main.querySelectorAll('h4')
                h4.forEach(item => {
                    arrH.push(item)
                })
                const h5 = main.querySelectorAll('h5')
                h5.forEach(item => {
                    arrH.push(item)
                })
                const h6 = main.querySelectorAll('h6')
                h6.forEach(item => {
                    arrH.push(item)
                })
                let str = '<div class="article_menu_heading">Содержание</div>' +
                          '<ol class="article_menu">'
                if(arrH.length === 0) {
                    menu.remove()
                } else {
                    arrH.forEach( (item, index) => {
                        str += `<li><b>${index +1}.</b>
                      <a href="#heading_${index}">
                        ${item.innerHTML}
                      </a>
                    </li>`
                    })
                    str += '</ol>'

                    menu.insertAdjacentHTML('afterBegin', str)
                    arrH.forEach((item, index) => {
                        item.setAttribute('id', `heading_${index}`)
                    })
                }
            }
        }
    }
   </script>
<style lang="scss">
.cms {
    padding-top: 48px;
    margin-bottom: 50px;
    color: var(--theme-cr-txt-cms);
    display: flow-root;

    .game-screenshots + & {
        padding-top: 20px;
    }

    /*.games + &,
    .slots + & {
        padding-top: 0;
    }*/

    p {
        &:not(:last-child) {
            margin-bottom: 25px;
        }
    }
  .article_menu a {
    text-decoration: none;
    color: var(--theme-cr-txt-cms);
  }
  .article_menu {
    list-style-type: none;
  }
  .article_menu li:before {
    display: none;
  }
  h1 {
        font-size: 26px;
        line-height: 1.179;
        font-weight: 900;
        margin-bottom: 12px;
        color: var(--theme-cr-txt);

        @media (min-width: 992px) {
            font-size: 32px;
            margin-bottom: 19px;
        }
    }

    h2 {
        font-size: 20px;
        line-height: 1.179;
        font-weight: 900;
        margin-bottom: 12px;
        color: var(--theme-cr-txt);

        @media (min-width: 992px) {
            font-size: 24px;
            margin-bottom: 18px;
        }
    }

    h3 {
        font-size: 18px;
        line-height: 1.182;
        margin-bottom: 12px;
        color: var(--theme-cr-txt);

        @media (min-width: 992px) {
            font-size: 22px;
            margin-bottom: 16px;
        }
    }

    h4 {
        font-size: 16px;
        line-height: var(--base-line-height);
        margin-bottom: 12px;
        color: var(--theme-cr-txt);

        @media (min-width: 992px) {
            font-size: 18px;
            margin-bottom: 16px;
        }
    }

    ul, ol {
        line-height: 1.8;
        margin: 0 0 28px;
        padding: 0;
        list-style: none;

        &:last-child {
            margin-bottom: 0;
        }
    }

    ul {
        li {
            padding-left: 20px;
            position: relative;

            &:before {
                position: absolute;
                top: 11px;
                left: 8px;
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

        li {
            padding-left: 25px;
            position: relative;
            counter-increment: counter;

            &:before {
                content: counter(counter) '.';
                position: absolute;
                top: 0;
                left: 5px;
            }
        }
    }

    blockquote {
        background-color: #fff;
        box-shadow: 0 4px 20px rgba(2, 19, 62, 0.2);
        border-radius: 8px;
        border-left: 4px solid #f33b68;
        padding: 15px 36px 15px 28px;
        position: relative;
        font-weight: 500;
        font-size: 16px;
        font-style: italic;
        line-height: 170%;
        margin: 30px 0;

        @media (min-width: 992px) {
            padding: 20px 56px 20px 42px;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        &:before {
            content: '“';
            font-family: var(--base-font-family);
            font-size: 40px;
            font-style: italic;
            line-height: 170%;
            color: #f33b68;
            position: absolute;
            left: 10px;
            top: 4px;
        }

        p {
            margin-bottom: 0;
        }
    }
}
.cms .nav {
  border-radius: 10px;
  padding: 15px 15px 15px 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgb(2 19 62 / 20%);
  border-radius: 8px;
  border-left: 4px solid #f33b68;
}
.cms-banner {
    position: relative;
    margin-bottom: 30px;

    @media (min-width: 992px) {
        margin-bottom: 50px;
    }

    img {
        border-radius: 15px;
    }
}
.article_menu_heading {
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
}
.cms-banner__ttl {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    color: rgba(#fff, .35);

    @media (min-width: 992px) {
        font-size: 64px;
    }
}

.two-cols {
    margin-bottom: 10px;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 25px;
    }
}

.two-cols__ttl {
    width: 100%;
}

.two-cols__col {
    @media (min-width: 992px) {
        flex: 0 0 49%;
        max-width: 49%;
    }
}

table:not(.detail-table) {
    font-family: var(--base-font-family);
    line-height: 1.6;
    box-shadow: 0 2px 14px rgba(#04001a, .15);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 50px;
    border-spacing: 0;
    background-color: #fff;
    border-radius: 14px;
    border: 1px solid rgba(#000, .2);
    display: block;
    width: 100%;

    thead,
    tbody {
        min-width: 500px;
        display: table;
        width: 100%;
    }

    thead td,
    th {
        font-size: 18px;
        line-height: 1.556;
        background-color: var(--table-head);
        padding: 12px 10px 12px 24px;
        color: #fff;
        text-align: left;
        text-transform: uppercase;

        &:first-child {
            border-radius: 14px 0 0 0;
            width: 260px;
        }

        &:last-child {
            border-radius: 0 14px 0 0;
        }
    }

    tr {
        &:not(:last-child) {
            td {
                border-bottom: 1px solid rgba(#000, .2);
            }
        }
    }

    /*&--no-border {
        tr {
            &:not(:last-child) {
                td {
                    border-bottom: 0;
                }
            }
        }
    }*/

    td {
        font-size: 18px;
        padding: 11px 10px 11px 24px;

        &:first-child {
            width: 260px;
        }

        img {
            vertical-align: middle;
        }
    }

    .icon-cross {
        color: #ff5f5f;
    }

    .icon-check {
        color: var(--btn-secondary);
    }
}

.table__btn {
    text-align: center;
    margin-top: 32px;

    [class*="btn-"] {
        min-width: 230px;
    }
}
</style>
