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
                    <li><router-link to="/home">首页</router-link></li>
                    <li><router-link to="/service">服务案例</router-link></li>
                    <li><router-link to="/news">新闻报道</router-link></li>
                    <li><router-link to="/company">公司简介</router-link></li>
                    <li><router-link to="/joinus">加入我们</router-link></li>
                    <li><router-link to="/login">登录注册</router-link></li>
                </ul>
            </div>
        </transition>

        <!-- middle part -->    
        <router-view></router-view>

        
        <!-- foot part -->
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
    },
}
</script>

<style scoped>
    a{
        color: #606260;
        text-decoration: none;
        display: inline-block;
        width: 100%;
    }

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
        /* border-bottom: 1px solid #A0A3A0 */
    }
    .navBar{
        width: 100%;
        height: 240px;
        background: #f8f9fa;
        overflow: hidden
    }
    .nav-btn{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .navBar ul li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 5px 0;
        padding-left: 10px;
        color: #606260
    }
    .navBar ul li:hover{
        background: #c3c3c4
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
