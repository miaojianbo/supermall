<template>
  <div class="tab-item">
        <router-link :to="addr"  tag="div">
            <div v-if="!active" class="imgDiv">
                <slot name="img"></slot>
            </div>
            <div v-else class="imgDiv">
                <slot name="imgActive"></slot>
            </div>
            <div>
                <slot name="desc"></slot>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        addr:{
            type:String,
            default:''
        }
    },
    data(){
        return{
        }
    },
    computed:{
        active(){
            return this.$route.path.indexOf(this.addr)!==-1
        }
    }
}
</script>

<style>
     .tab-item{
       flex: 1;
       text-align: center;
       height: 49px;
       vertical-align: middle;
       margin-top: 3px;
    }

    .tab-item img{
        height: 25px;
        width:25px
    }
    .imgDiv{
        display: inline-block;
    }
</style>