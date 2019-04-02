<template>
    <div>
        <!-- <div class="blank"></div> -->
        <div class="background" ref="back">
            arsenal
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){       
    },
    mounted(){
        this.backgroundHeight()
    },
    methods:{
        backgroundHeight(){
            var windowScreenHeight = window.screen.height
            this.$refs.back.style.height = windowScreenHeight - 55 + 'px'
        }
    }
}
</script>

<style lang="scss">
    .background{
        background: url(../images/login-back.png);
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>
