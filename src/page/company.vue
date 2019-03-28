<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="topBar">
            <img src="../images/intro.jpg" alt="">
        </div>

        <div class="company-intro">
            <h3>公司简介</h3>
            <span></span>
            <div class="list">
                <ul>
                    <li v-for="intro in introList" :key="intro.id">
                        <img v-lazy="intro.img" alt="">
                        <div class="info">
                            <h4>{{intro.title}}</h4>
                            <p>{{intro.intro}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            introList: [
                { id: 1, img: require('../images/intropic1.jpg'), title: '服务理念', intro: '秉承着以顾客利益至上的理念，我们利用互联网工具，在知识经济这一领域上面不断的优化自己，为供需双方提供更方便快捷的链接方式。' },
                { id: 2, img: require('../images/intropic2.jpg'), title: '品牌理念', intro: '知经秉承着开创更美好的知识经济时代的宗旨，致力于发掘与配置被隐藏的社会资源——知识与技能的价值，使学有所用，求有所应，企业全体员工努力拼搏，齐心协力推动世界变得更加美好。' },
                { id: 3, img: require('../images/intropic3.jpg'), title: '地址/人员概况', intro: '深圳市嘀哒知经科技有限责任公司，坐落于广东深圳，是一家年轻有为的创业公司。' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .company-intro{
        background: #f9f9f9;
        padding-bottom: 10px;
        h3 {
            padding: 10px;
            margin: 0;
            text-align: center;
            color: #606260;
            font-size: 0.5rem;
        }
        span {
            display: block;
            width: 50px;
            height: 2px;
            background: #38b1f0;
            margin: 0 auto;
        }
        .list{
            width: 7rem;
            padding-top: 10px;
            margin: 0 auto;
            ul{
                li{
                    margin-bottom: 20px;
                    img{
                        width: 100%;
                        display: block;
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                    .info{
                        background: #fff;
                        margin-top: 10px;
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                        h4{
                            font-size: 0.5rem;
                            margin: 0;
                            padding: 5px 10px;
                            color: #606260;
                        }
                        p{
                            font-size: 0.3rem;
                            margin: 0;
                            padding: 10px;
                            color: #606260;
                        }
                    }              
                }
            }
        }
    }
    .topBar{
        width: 100%;
        position: relative;
        img{
            width: 100%;
            display: block;
        }
    }
</style>