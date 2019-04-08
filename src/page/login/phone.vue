<template>
    <div class="phoneframe">
        <div class="user">
            <input type="text" placeholder="请输入手机" class="inputframe">
            <input type="text" placeholder="请输入验证码" class="inputframe">
            <div class="wenzi">
                <div class="remeber">
                    <input type="checkbox" name="" id="">
                    <p>记住账号</p>
                </div>
                <p><a href="">获取验证码</a></p>
            </div>
            <button>登录</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .phoneframe{
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
                        color: #34AF80;
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