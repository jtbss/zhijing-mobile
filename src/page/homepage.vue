<template>
    <div>
        <mt-swipe :show-indicators="false">
            <mt-swipe-item><img src="../images/carousel1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../images/carousel2.jpg" alt=""></mt-swipe-item>
        </mt-swipe>

        <div class="app-intro">
            <h3>产品/APP</h3>
            <span></span>
            <p>"知经"是全球领先的知识与技能分享平台APP，链接全球的技能者与需求者。帮助全世界范围内各行各业的技能者实现他们在八小时以外的技能变现，帮助需求者以更轻便的方式解决他们的问题。实现社会资源的重新整合利用。同时"知经"致力于全世界的大学生家教集约中心建立，帮助大学生实现知识技能的应用与变现。</p>
        </div>

        <div class="app-pic">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <img v-lazy="item.img">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // imge: require('../images/ap1.jpg'),
            list: [
                { id: 1, img: require('../images/ap1.jpg') },
                { id: 2, img: require('../images/ap2.jpg') },
                { id: 3, img: require('../images/ap3.jpg') },
                { id: 4, img: require('../images/ap4.jpg') },
                { id: 5, img: require('../images/ap5.jpg') },
            ]
        }
    },
    created() {
        
    },
}
</script>

<style scoped>
    .app-pic img{
        width: 100%;
        display: block
    }

    .app-intro h3{
        margin: 10px auto;
        text-align: center;
        color: #606260
    }
    .app-intro p{
        margin: 10px;
        text-align: left;
        color: #606260;
        text-align: justify
    }
    .app-intro span{
        display: block;
        width: 50px;
        height: 2px;
        background: #34af80;
        margin: 0 auto;
    }
    .mint-swipe{
        height: 160px;
    }
    .mint-swipe img{
        width: 100%;
        display: block;
    }
</style>