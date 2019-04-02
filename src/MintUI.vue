<template>
    <div>
        <!-- 顶部导航 -->
        <div class="navigator">
            <div class="logo">
                <img src="./images/logo.png" id="logo" alt="">
            </div>
            <mt-button class="nav-btn" type="default" @click="flag=!flag">导航</mt-button>
        </div>
        <!-- <mt-header fixed title="知经"></mt-header> -->
        <!-- <mt-button type="danger" @click="flag=!flag">primary</mt-button> -->
        <transition>
            <div class="navBar" v-if="flag">
                <ul>
                    <router-link to="/home" tag="li">首页</router-link>
                    <router-link to="/service" tag="li">服务案例</router-link>
                    <router-link to="/news" tag="li">新闻报道</router-link>
                    <router-link to="/company" tag="li">公司简介</router-link>
                    <router-link to="/joinus" tag="li">加入我们</router-link>
                    <router-link to="/login" tag="li">登录注册</router-link>
                </ul>
            </div>
        </transition>

        <!-- middle part -->
        <div class="app-container">
            <transition name="main" appear>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'COME ON YOU GUNNER',
            flag: false
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    // 主视图动画
    .app-container{
        overflow-x: hidden;
    }
    .main-enter,
    {
        opacity: 0;
        transform: translateX(100%);
    }
    .main-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .main-enter-active,
    .main-leave-active{
        transition: all 0.5s ease
    }
    //////////////////////

    #logo{
        width: 45px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%)
    }
    .navigator{
        width: 100%;
        height: 35px;
        background: #f8f9fa;
        padding: 10px 0;
        position: relative;
        // position: fixed;
        // z-index: 999;
    }
    .nav-btn{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .navBar {
        // margin-top: 55px;
        // position: fixed;
        // z-index: 999;
        width: 100%;
        height: 240px;
        background: #f8f9fa;
        overflow: hidden;
        ul {
            li {
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 5px 0;
            padding-left: 10px;
            color: #606260;
            font-size: 18px;
            &:hover {
                background: #c3c3c4;
            }
            }
        }
    }

    .v-enter,
    .v-leave-to{
        /* opacity: 0; */
        height: 0px;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
</style>
