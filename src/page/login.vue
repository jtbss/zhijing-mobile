<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="background" ref="back">
            <div class="loginframe">
                <!-- 登录方式 -->
                <div class="loginway">
                    <ul>
                        <li @click="accountRoute" ref="account">账号密码</li>
                        <li @click="phoneRoute" ref="phone">手机登录</li>
                        <li @click="wechatRoute" ref="wechat">微信登录</li>
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
        this.backgroundHeight()
        this.$refs.account.style.background = "#34AF80"
        this.$refs.account.style.color = "#fff"
    },
    methods:{
        backgroundHeight(){
            var windowScreenHeight = window.screen.height
            this.$refs.back.style.height = windowScreenHeight - 55 + 'px'
        },
        accountRoute(){
            // 编程时导航
            this.$router.push('/login/account');
            this.$refs.account.style.background = "#34AF80"
            this.$refs.account.style.color = "#fff"

            this.$refs.phone.style.background = "#fff"
            this.$refs.phone.style.color = "#333"
            this.$refs.wechat.style.background = "#fff"
            this.$refs.wechat.style.color = "#333"
        },
        phoneRoute(){
            // 编程时导航
            this.$router.push('/login/phone');
            this.$refs.phone.style.background = "#34AF80"
            this.$refs.phone.style.color = "#fff"

            this.$refs.account.style.background = "#fff"
            this.$refs.account.style.color = "#333"
            this.$refs.wechat.style.background = "#fff"
            this.$refs.wechat.style.color = "#333"
        },
        wechatRoute(){
            // 编程式导航
            this.$router.push('/login/wechat');
            this.$refs.wechat.style.background = "#34AF80"
            this.$refs.wechat.style.color = "#fff"

            this.$refs.account.style.background = "#fff"
            this.$refs.account.style.color = "#333"
            this.$refs.phone.style.background = "#fff"
            this.$refs.phone.style.color = "#333"
        }
    }
}
</script>

<style lang="scss" scoped>
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
                        background: #fff;
                        // border-bottom: 1px solid #d8d7d7;
                        &:nth-child(1){
                            border-top-left-radius: 10px;
                        }
                        &:nth-child(3){
                            border-top-right-radius: 10px;
                        }
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #333;
                        margin: 0;
                        font-size: 12.9px;
                    }
                }
            }
        }
    }
</style>
