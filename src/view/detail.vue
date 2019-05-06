<template>
  <div id="detailBox">
    <span>{{id}}</span>
  </div>
</template>

<script>
import {getSwipeListApi} from '@/api/index.js'

export default {
  data() {
    return {
        // id号
        id:'',
    }
  },
  mounted() {
    this.getDetailId()
  },
  methods: {
      getDetailId:function(){
          this.id = this.$route.params.id
      }
  },
  
};
</script>

<style lang="scss" scoped>
#detailBox  {
    
}

</style>
