<template>
    <div>
        users_id<br>
        <h1 class="red">Hello {{ name }}!</h1>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        metaInfo: {
            title: 'usersId', // set a title
            //titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
            htmlAttrs: {
                lang: 'en',
                amp: undefined // "amp" has no value
            }
        },
        //返回promise
/*        asyncData ({context}) {
            // called every time before loading the component
        return axios.post('http://114.215.139.164:2333/token-manager/unchk/auth/login/personal',
            {email : 'thm133@foxmail.com',password:'12345678'})
            .then(res =>{
                console.log(res)
                if(res.data.status===20){
                    console.log('worlds')
                    return {name: res.data.content.user.username}
                }else{
                    console.log('Beet')
                    return { name: 'world' }
                }
            })
        },*/
        //使用async或await
/*        async asyncData ({ params }) {
            let {data} = await axios.post('http://114.215.139.164:2333/token-manager/unchk/auth/login/personal',
                {email : 'thm133@foxmail.com',password:'12345678'})
            console.log(data)
            return {name: data.content.user.username}
        },*/
        // 使用回调函数
/*        asyncData ({params},callback) {
            axios.post('http://114.215.139.164:2333/token-manager/unchk/auth/login/personal', {email : 'thm133@foxmail.com',password:'12345678'})
            .then((res)=>{
                callback(null, {name: res.data.content.user.username})
            })
        },*/
        // 错误处理
/*        asyncData ({ params, error }) {
            return axios.post('http://114.215.139.164:2333/token-manager/unchk/auth/login/personal', {email : 'thm133@foxmail.com',password:'12345678'})
                .then((res) => {
                    return { name: res.data.content.user.username}
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'Post not found' })
                })
        },*/
        asyncData ({ params }, callback) {
            axios.post('http://114.215.139.164:2333/token-manager/unchk/auth/login/personal', {email : 'thm133@foxmail.com',password:'12345678'})
                .then((res) => {
                    callback(null, { name: res.data.content.user.username})
                })
                .catch((e) => {
                    callback({ statusCode: 404, message: 'Post not found' })
                })
        },
        // 返回对象
        data () {
            return {foo: 'bar'}
        },
        fetch () {
            // The fetch method is used to fill the store before rendering the page
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>