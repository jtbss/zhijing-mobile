<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="background" ref="back">
            <div class="loginframe">
                <!-- 登录方式 -->
                <div class="loginway">
                    <ul>
                        <router-link to="/login/account" tag="li"><p>账号密码</p></router-link>
                        <router-link to="/login/phone" tag="li"><p>手机登录</p></router-link>
                        <router-link to="/login/wechat" tag="li"><p>微信登录</p></router-link>
                    </ul>
                </div>

                <!-- 方式组件 -->
                <router-view></router-view>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){       
    },
    mounted(){
        // this.backgroundHeight()
    },
    methods:{
        backgroundHeight(){
            var windowScreenHeight = window.screen.height
            this.$refs.back.style.height = windowScreenHeight - 55 + 'px'
        }
    }
}
</script>

<style lang="scss">
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .background{
        background: url(../images/login-back.png);
        background-size: cover;
        width: 100%;
        height: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
        .loginframe{
            width: 300px;
            height: 230px;
            background: #fff;
            border-radius: 10px;
            .loginway{
                width: 100%;
                height: 50px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                ul{
                    li{
                        width: 100px;
                        height: 50px;
                        text-align: center;
                        float: left;
                        background: #34AF80;
                        &:nth-child(1){
                            border-top-left-radius: 10px;
                        }
                        &:nth-child(3){
                            border-top-right-radius: 10px;
                        }
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        p{
                            color: #fff;
                            margin: 0;
                            font-size: 12.9px;
                        }
                    }
                }
            }
        }
    }
</style>
