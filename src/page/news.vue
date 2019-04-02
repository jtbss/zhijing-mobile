<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="topBar">
            <img src="../images/news.jpg" alt="">
        </div>
        
        <div class="news-list">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <div class="news-content">
                        <div class="pic">
                            <img v-lazy="item.img" alt="">                            
                        </div>
                        <div class="content">
                            <h4>{{item.title}}</h4>
                            <p>{{item.content}}</p>
                        </div>            
                    </div>
                </li>
            </ul>
        </div>
        <foot-box></foot-box>
    </div>
</template>

<script>
import foot from './foot.vue'

export default {
    data(){
        return {
            list: [
                { id: 1, img: require('../images/newspic6.jpg'), title: '接纳新变化——知识经济时代新人类生活指南', content: '大学生钟某是国内知名院校的大二本科生，他凭借着独到的知识体会与风趣幽默的讲解，受到知经平台用户的喜爱追捧，在20岁的年纪便积累了第一桶金，在知经这个平台上他说“个人命运选择总要符合时代趋势，知经让我感受到了知识是最大的财富这句话的真意”' },
                { id: 2, img: require('../images/newspic5.jpg'), title: '大学生创业引流新渠道嘀哒知经', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 3, img: require('../images/newspic4.jpg'), title: '新兴跨国企业抵达知经科技专访', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 4, img: require('../images/newspic3.jpg'), title: '大学生技能变现“在知经我重新思索了学识的意义”', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 5, img: require('../images/newspic2.jpg'), title: '大学生技能变现“在知经我重新思索了学识的意义”', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 6, img: require('../images/newspic1.jpg'), title: '大学生技能变现“在知经我重新思索了学识的意义”', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 7, img: require('../images/newspic6.jpg'), title: '大学生技能变现“在知经我重新思索了学识的意义”', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
                { id: 8, img: require('../images/newspic5.jpg'), title: '大学生技能变现“在知经我重新思索了学识的意义”', content: '“你好，世界！”全球旅行摄影大赛第一期（2018年5月）征集近5000幅投稿，经本期评委的严格评选审核，最终3幅作品脱颖而出摘得首月“月度最佳奖”，10幅/组作品获得“月度优秀奖”。' },
            ]
        }
    },
    components: {
        'foot-box': foot
    }
}
</script>

<style scoped lang="scss">
    .news-list{
        background: #f9f9f9;
        width: 100%;
        padding-bottom: 10px;
        ul{
            li{
                padding: 20px 0 0 0;
                margin: 0 15px;
                border-bottom: 1px solid #d0d1d0;
                &:nth-child(8){
                    border-bottom: none;
                }
                .news-content{
                    display: flex;
                    .pic{
                        flex: 4;
                        img{
                            width: 100%;
                            border-radius: 8px;
                            transform: translateY(2px)
                        }
                    }
                    .content{
                        flex: 9;
                        h4{
                            font-size: 0.3rem;
                            margin: 0;
                            padding: 0 5px;
                        }
                        p{
                            font-size: 0.3rem;
                            margin: 0;
                            padding: 5px;
                            text-align: justify;
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