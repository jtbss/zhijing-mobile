<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="topBar">
            <img src="../images/joinus.jpg" alt="">
        </div>

        <div class="position-list">
            <div class="item-list">
                <ul>
                    <li v-for="pos in posList" :key="pos.id">
                        <div class="title" @click="show(pos.id, $event)">
                            <h4>{{pos.posName}}</h4>
                            <h4>{{pos.salary}}</h4>                            
                        </div>
                        <transition name="poslist">
                            <div class="posDes" 
                                 v-if= pos.view
                                 v-html= pos.posDemand
                            >    
                            </div>
                        </transition>
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
            flag: false,
            posList: [
                { 
                    id: 1, 
                    view: false, 
                    posName: '商务经理', 
                    salary: '8-12k', 
                    posDescription: '', 
                    posDemand: '<h4>职位描述</h4><p>1、负责外部渠道的合作和拓展，通过持续的资源互换或联合活动的方式，最大化合作价值；</p><p>2、有计划的拓宽新渠道，制定推广策略，创新渠道合作模式；</p><p>3、独立负责策划合作项目的推广活动，并最终衡量渠道资源及合作的价值；</p><p>4、定期对合作项目进行数据分析并给予方案优化的建议。</p><h4>任职要求</h4><p>1、本科以上学历，手机行业商务资源众多者优先；</p><p>2、丰富的手机产品互联网推广活动策划经验，熟悉市场营销策略流程；</p><p>3、有良好的沟通合作技巧，具有较强业务谈判技巧；</p><p>4、具有敏感的商业和市场意识，分析问题及解决问题能力强，具有优秀的资源整合能力和业务推进能力。</p>' 
                },
                { 
                    id: 2, 
                    view: false, 
                    posName: '商务经理', 
                    salary: '8-12k', 
                    posDescription: '', 
                    posDemand: '<h4>职位描述</h4><p>1、负责外部渠道的合作和拓展，通过持续的资源互换或联合活动的方式，最大化合作价值；</p><p>2、有计划的拓宽新渠道，制定推广策略，创新渠道合作模式；</p><p>3、独立负责策划合作项目的推广活动，并最终衡量渠道资源及合作的价值；</p><p>4、定期对合作项目进行数据分析并给予方案优化的建议。</p><h4>任职要求</h4><p>1、本科以上学历，手机行业商务资源众多者优先；</p><p>2、丰富的手机产品互联网推广活动策划经验，熟悉市场营销策略流程；</p><p>3、有良好的沟通合作技巧，具有较强业务谈判技巧；</p><p>4、具有敏感的商业和市场意识，分析问题及解决问题能力强，具有优秀的资源整合能力和业务推进能力。</p>' 
                },
                { 
                    id: 3, 
                    view: false, 
                    posName: '商务经理', 
                    salary: '8-12k', 
                    posDescription: '', 
                    posDemand: '<h4>职位描述</h4><p>1、负责外部渠道的合作和拓展，通过持续的资源互换或联合活动的方式，最大化合作价值；</p><p>2、有计划的拓宽新渠道，制定推广策略，创新渠道合作模式；</p><p>3、独立负责策划合作项目的推广活动，并最终衡量渠道资源及合作的价值；</p><p>4、定期对合作项目进行数据分析并给予方案优化的建议。</p><h4>任职要求</h4><p>1、本科以上学历，手机行业商务资源众多者优先；</p><p>2、丰富的手机产品互联网推广活动策划经验，熟悉市场营销策略流程；</p><p>3、有良好的沟通合作技巧，具有较强业务谈判技巧；</p><p>4、具有敏感的商业和市场意识，分析问题及解决问题能力强，具有优秀的资源整合能力和业务推进能力。</p>' 
                },
                { 
                    id: 4, 
                    view: false, 
                    posName: '商务经理', 
                    salary: '8-12k', 
                    posDescription: '', 
                    posDemand: '<h4>职位描述</h4><p>1、负责外部渠道的合作和拓展，通过持续的资源互换或联合活动的方式，最大化合作价值；</p><p>2、有计划的拓宽新渠道，制定推广策略，创新渠道合作模式；</p><p>3、独立负责策划合作项目的推广活动，并最终衡量渠道资源及合作的价值；</p><p>4、定期对合作项目进行数据分析并给予方案优化的建议。</p><h4>任职要求</h4><p>1、本科以上学历，手机行业商务资源众多者优先；</p><p>2、丰富的手机产品互联网推广活动策划经验，熟悉市场营销策略流程；</p><p>3、有良好的沟通合作技巧，具有较强业务谈判技巧；</p><p>4、具有敏感的商业和市场意识，分析问题及解决问题能力强，具有优秀的资源整合能力和业务推进能力。</p>' 
                },
            ]
        }
    },
    methods: {
        show(id,event){
            // console.log(id)
            // var el = event.currentTarget
            // console.log(event)
            this.posList[id-1].view = !this.posList[id-1].view
        }
    }
}
</script>

<style lang="scss">
    .poslist-enter,
    .poslist-leave-to{
        opacity: 0;
        // height: 0;
        transform: translateX(100px)
    }
    .poslist-enter-active,
    .poslist-leave-active{
        transition: all 0.5s ease;
    }

    .position-list{
        width: 100%;
        padding: 10px 0;
        background: #f9f9f9;
        .item-list{
            width: 90%;
            margin: 0 auto;
            ul{
                li{
                    background: #fff;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    padding: 0 10px;
                    .posDes{
                        width: 100%;
                        h4{
                            margin: 0;
                            font-size: 0.4rem;
                            color: #34AF80;
                            padding-bottom: 5px;
                        }
                        p{
                            margin: 0;
                            font-size: 0.4rem;
                            color: #606260;
                            padding-bottom: 5px;
                        }
                    }
                    .title{
                        width: 100%;
                        padding: 10px 0;
                        display: flex;//flex布局
                        justify-content: space-between; //flex左右对称
                        align-items: center; //flex垂直居中
                    }  
                    h4{
                        margin: 0;
                        font-size: 0.45rem;
                        color: #000000;
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