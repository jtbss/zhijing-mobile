<template>
    <div class="wechatframe">
        <div class="content">
            <img src="../../images/ios-appstorelink.png" alt="">
            <p>微信扫描二维码，立即登录</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .wechatframe{
        width: 280px;
        height: 160px;
        padding: 10px;
        .content{
            width: 100%;
            height: 155px;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: space-between;
            img{
                width: 130px;
                display: block;
                // margin-bottom: 8px;
            }
            p{
                margin: 0;
                font-size: 10px;
                color: #34af80;
            }
        }
    }
</style>
