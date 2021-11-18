<template>
    <div class="game-symbols" v-if="currentValue.length!==0">
        <div class="container">
            <h2 v-if="title.length !== 0">{{title}}</h2>

            <div class="game-symbols__container">
                <div class="symbols-item"
                     v-for="(item, index) in currentValue"
                     :key="index"
                >
                    <img class="symbols-item__img" :src="item.src" alt="">

                    <ul class="symbols-item__txt" v-if="item.value_2.length !== 0">
                        <li
                        v-for="(item_1, index_1) in item.value_2"
                        :key="index_1"
                        >
                        <strong class="mark">{{currentValue[index].value_2[index_1]}}</strong>
                        <span class="dot">&#183;</span> {{currentValue[index].value_3[index_1]}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
        name: "app-game-symbols",
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
        data(){
            return {
                currentValue: []
            }
        },
        mounted() {
            this.value.forEach(item => {
                if(item.value_2 !== null &&  item.value_3 !== null) {
                    const newArr = item.value_2.split('x')
                    newArr.shift()
                    const newArrSecond = item.value_3.split('<br>')
                    if(newArr.length === newArrSecond.length) {
                        this.currentValue.push({
                            src: item.src,
                            value_1: item.value_1,
                            value_2: newArr,
                            value_3: newArrSecond
                        })
                    }
                }
            })
        }
    }
</script>

<style lang="scss">
.game-symbols {
    padding-top: 30px;
    --symbols-width: 50%;
    --symbols-gutter: 15px;
    --symbols-bottom-gutter: 15px;

    @media (min-width: 768px) {
        --symbols-gutter: 20px;
        --symbols-width: 33.333%;
        --symbols-bottom-gutter: 22px;
    }
}

.game-symbols__container {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--symbols-gutter) / -2);
    margin-right: calc(var(--symbols-gutter) / -2);
    margin-bottom: calc(var(--symbols-bottom-gutter) * -1);

    .symbols-item {
        flex-shrink: 0;
        flex-basis: calc(var(--symbols-width) - var(--symbols-gutter));
        margin-left: calc(var(--symbols-gutter) / 2);
        margin-right: calc(var(--symbols-gutter) / 2);
    }
}

.symbols-item {
    display: flex;
    align-items: center;
    color: var(--theme-cr-txt-cms);
    margin-bottom: var(--symbols-bottom-gutter);

    .dot {
        display: inline-block;
        vertical-align: middle;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        text-indent: -9999px;
        background-color: currentColor;
        margin: -2px 6px 0;
    }
}

.symbols-item__img {
    width: 60px;
    margin-right: 10px;
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 100px;
        margin-right: 16px;
    }
}

.symbols-item__txt {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 24px;

    .mark {
        color: var(--theme-cr-2);
    }
}
</style>
