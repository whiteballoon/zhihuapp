<template>
  <div id="indexBox">
    <div class="indexHeader">
      <mt-header fixed title="今日热闻">
        <mt-button @click.native="handleClick" slot="left">
          <img src="../assets/menu_icon.png" height="20" width="20" slot="icon">
        </mt-button>
      </mt-header>
    </div>
    <div class="indexSwipe">
       <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt=""  referrerpolicy ="never">
      <!-- <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://pic1.zhimg.com/v2-1fe7a76e8ffbc94fd709d916bdeb8c58.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  
};
</script>

<style lang="scss" scoped>
#indexBox  {
    .indexSwipe {
        height:200px;
        img{
          width: 100%;
          height: 100%;
        }
    }
}
</style>
