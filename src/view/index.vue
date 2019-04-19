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
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#indexBox  {
    .indexSwipe {
        height:200px;
    }
}
</style>
