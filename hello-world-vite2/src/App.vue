<template>
  <ProvideComponent>
    
  </ProvideComponent>
</template>

<script>
import ProvideComponent from './components/ProvideComponent.vue';
import { provide } from 'vue';

export default{
  provide :{
    msg : '메시지',
  },
  components : {
    ProvideComponent
  }
}
</script>


