<template>
    <div class="accountframe">
        <!-- 使用了flex布局 -->
        <div class="user">
            <input type="text" placeholder="用户名/手机" class="inputframe">
            <input type="password" placeholder="密码" class="inputframe">
            <div class="wenzi">
                <div class="remeber">
                    <input type="checkbox" name="" id="">
                    <p>记住账号</p>
                </div>
                <p><a href="">忘记密码</a>&nbsp;&nbsp;<a href="">注册账号</a></p>
            </div>
            <button>登录</button>
        </div>

        <!-- 不使用flex布局 -->
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

    //使用了flex布局
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
            position: relative;
            margin-top: 5px;
            .inputframe{
                background: #fff;
                color: #999;
                border: 1px solid #ddd;
                padding-left: 15px;
                width: 100%;
                height: 30px;
                border-radius: 5px;
                appearance: none;
                -webkit-appearance: none;
            }
            .wenzi{
                padding: 0 5px;
                width: 100%;
                height: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .remeber{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 70px;
                    input{
                        border: 1px solid #ddd;
                        background: #fff;
                        width: 15px;
                        height: 15px;
                        transform: translateY(0.5px);
                    }
                }
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