<template>
    <div>
        <div class="user-class">
            {{category}}
            <nuxt-link to="user">qushou</nuxt-link>
            <div @click="aaa">aaa</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        asyncData (context) {
            // called every time before loading the component
            return { name: 'World' }
        },
        fetch () {
            // The fetch method is used to fill the store before rendering the page
        },
        computed: {
            ...mapGetters({
                isMobile: 'app/mobileLayout',
                category: 'category/categorys'
            })
        },
        methods: {
            aaa () {
                commit(user, true)
            },
            ...mapMutations({
                user: 'app/SET_MOBILE_LAYOUT'
            })
        }
    }
</script>
<style scoped lang="stylus">
    @import "~assets/stylus/var/index";
    .user-class{
        background-color :$green-9
    }
</style>

