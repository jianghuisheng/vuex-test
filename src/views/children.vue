<template>
  <div>
    <Button @click="back" type="primary">返回</Button>
    Count is {{$store.state.count}}
    <Button @click="increment">+5</Button>
    <Button @click="decrement">-3</Button>
  </div>
</template>
<script>
  // 引入mapActions，很重要
  import { mapGetters, mapActions } from 'vuex'
  export default{
    computed: mapGetters([//与vuex中的getters关联

    ]),

    methods: mapActions([//与vuex中的actions关联
      'increment',
      'decrement',
      'back'
    ])
    
  }
</script>