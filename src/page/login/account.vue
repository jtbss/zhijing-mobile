<template>
    <div class="accountframe">
        <!-- <i><img src="../../images/user.png" alt=""></i> -->
        <div class="user">
            <input type="text" placeholder="用户名/手机"> 
            <input type="password" placeholder="用户名/手机">
            <div class="wenzi">
                <p>记住账号</p>
                <p><a href="">忘记密码</a>&nbsp;&nbsp;<a href="">注册账号</a></p>
            </div>
            <button>登录</button>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    .accountframe{
        width: 280px;
        height: 160px;
        padding: 10px;
        .user{
            display: flex;
            flex-wrap: wrap;
            width: 80%;
            height: 100%;
            margin: 0 auto;
            input{
                background: #fff;
                color: #999;
                border: 1px solid #ddd;
                padding-left: 35px;
                width: 100%;
                height: 30px;
                border-radius: 5px;
            }
            .wenzi{
                padding: 0 5px;
                width: 100%;
                height: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    color: #999;
                    margin: 0;
                    font-size: 10px;
                    a{
                        color: #999;
                        text-decoration: none;
                    }
                }
            }
            button{
                width: 100%;
                height: 30px;
                background: #ffffff;
                border: 1px solid #34AF80;
                border-radius: 5px;
                outline: #34AF80;
            }
        }
    }
</style>