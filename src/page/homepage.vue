<template>
    <div>
        <!-- <div class="blank"></div> -->
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

        <div class="news">
            <h3>新闻动态</h3>
            <span></span>

            <div class="newsList">
                <ul>
                    <li v-for="news in newsList" :key="news.id">
                        <img v-lazy="news.img">
                        <p>{{news.title}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="company-intro">
            <h3>关于我们</h3>
            <span></span>
            <div>
                <p>深圳市嘀哒知经科技有限责任公司创立于2017年，目前公司位于深圳市福田保税区。作为一家新兴、新鲜、新潮的互联网公司，在这个知识经济时代里，团队站在了时代的浪尖上，致力于开发出人人可出售“自己”、出售知识的平台，它就是【知经】APP，一个链接世界，让知识与经验从此不再孤独！在这里可以与各行业大咖畅所欲言，谈笑间完成知识的学习，与【知经】一起进入知识经济时代！</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                { id: 1, img: require('../images/ap1.jpg') },
                { id: 2, img: require('../images/ap2.jpg') },
                { id: 3, img: require('../images/ap3.jpg') },
                { id: 4, img: require('../images/ap4.jpg') },
                { id: 5, img: require('../images/ap5.jpg') },
            ],
            newsList : [
                { id: 1, title: '知经引发知识经济爆发性增长', img: require('../images/newspic1.jpg') },
                { id: 2, title: '知经获得2.5亿美金估值', img: require('../images/newspic2.jpg') },
                { id: 3, title: '接纳新变化-知识经济时代新人类生活指南', img: require('../images/newspic3.jpg') },
                { id: 4, title: '大学生创业引流新渠道知经', img: require('../images/newspic4.jpg') },
                { id: 5, title: '新兴跨国企业知经科技专访', img: require('../images/newspic5.jpg') },
                { id: 6, title: '探索未来，新的赛道如何评判', img: require('../images/newspic6.jpg') }
            ]
        }
    },
    created() {
        console.log('Welcome comt to Weclick!')
    },
}
</script>

<style scoped lang="scss">
    p{
        font-size: 0.4rem;
    }

    .company-intro{
        background-image: url('../images/about-us.jpg');
        background-size: cover;
        padding: 20px 20px 40px 20px;
        h3{
            margin: 0;
            text-align: center;
            padding: 10px;
            font-size: 0.5rem;
        }
        span{
            display: block;
            width: 50px;
            height: 2px;
            background: #34af80;
            margin: 10px auto;
        }
        div{
            width: 8rem;
            margin: 0 auto;
            background: rgba(80,80,80,0.7);
            border-radius: 10px;
            p{
                padding: 20px;
                margin: 0;
                text-align: justify;
                color: #fff;
            }
        }
    }

    .app-pic img{
        width: 100%;
        display: block
    }

    .newsList {
        ul {
            // background: #606260;
            width: 7rem;
            margin: 0 auto;
            padding-bottom: 20px;
            li {
                border-radius: 8px;
                background: #fff;
                margin-bottom: 20px;
                &:nth-child(6){
                    margin-bottom: 0;
                }
                img {
                    width: 100%;
                    display: block;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                p{
                    margin: 0;
                    text-align: center;
                    padding: 10px;
                    font-size: 0.4rem;
                    font-weight: bold;
                    color: #606260;
                }
            }
        }
    }

    .news {
        width: 100%;
        background: #f6f6f6;
        padding-top: 10px;
        h3 {
            margin: 0;
            margin-bottom: 10px;
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
            margin-bottom: 10px;
        }
    }

    .app-intro {
        h3 {
            margin: 10px;
            text-align: center;
            color: #606260;
            font-size: 0.5rem;
        }
        p {
            margin: 20px;
            text-align: left;
            color: #606260;
            text-align: justify;
        }
        span {
            display: block;
            width: 50px;
            height: 2px;
            background: #34af80;
            margin: 0 auto;
        }
    }

    .mint-swipe{
        height: 4.27rem;
    }
    .mint-swipe img{
        width: 100%;
        display: block;
    }
</style>