<template>
    <div>
        <div class="blank"></div>
        <div class="topBar">
            <img src="../images/service.jpg" alt="">
        </div>

        <div class="service-area">
            <h3>服务范围</h3>
            <span></span>
            <img src="../images/service-area.jpg" alt="">
        </div>

        <div class="lecturer-list">
            <h3>金牌讲师</h3>
            <span></span>
            <div class="list">
                <ul>
                    <li v-for="lect in lecList" :key="lect.id">
                        <img v-lazy="lect.img" alt="">
                        <div class="info">
                            <h4>{{lect.name}}</h4>
                            <p>{{lect.intro}}</p>
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
            lecList: [
                { id: 1, img: require('../images/lecturer1.jpg'), name: '汪远铭', intro: '浙江大学生命科学研究院教授，美国加州理工学院博士；多项研究成果发表在《自然》等世界一流学术期刊；著有科普作品《生物奥秘》与《自然视角》；是一个特别会讲故事的科学家。' },
                { id: 2, img: require('../images/lecturer2.jpg'), name: '徐立源', intro: '专栏记者，演讲培训师，翻译，主持人，擅长精炼全球大刊、机构报告、提炼“新知”，是《新知》主理人。他以最专业的角度和最前沿的视角，全面解读今年最值得关注的十大新兴技术。' },
                { id: 3, img: require('../images/lecturer3.jpg'), name: '洪振杰', intro: '从事编程行业10年的高级全栈工程师，精通前端后台各项编程语言及各大主流框架技术。10年来通过博客和各种课程帮助了许多爱好编程的初学者和需要进修的编程高手，哺乳了IT业新生力量的同时也为IT业不断注入新的强大力量。他以自身的学习经历，制作了《PHP高编》、《JavaScript思想》等珍贵的教程。' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .lecturer-list{
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

    .service-area {
        h3 {
            margin: 10px;
            text-align: center;
            color: #606260;
            font-size: 0.5rem;
        }
        span {
            display: block;
            width: 50px;
            height: 2px;
            background: #34af80;
            margin: 0 auto;
        }
        img{
            margin-top: 10px;
            width: 100%;
            display: block;
        }
    }

    .topBar{
        width: 100%;
        position: relative;
        img{
            width: 100%;
        }
    }
</style>