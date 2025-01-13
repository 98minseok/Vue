<template>
    <p class="m-2">
    총 {{ applications_count }} 개의 어플리케이션 중
    {{ applications.length }} 개 보여지는중
  </p>
  <hr />
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="data in applications" :key="data.id">
      <app-card :data="data" />
    </div>
  </div>
  <input type ="search" v-model = "searchData">
</template>

<script>
    import { useStore } from 'vuex';
    import { ref, onMounted , computed } from 'vue'
    import AppCard from './AppCard.vue';
    import useAxios from '../modules/axios'
import { useApplications } from '../compositions/useApplications';
export default{
    name : "Application",
    setup(){
        const searchData = ref("")
        //const store = useStore()
        const {axiosGet} = useAxios()
        const {applicationsData,applications_count,setApplications} = useApplications();
        const applications = computed(() => {
            if(searchData.value ==""){
                //return store.getters['applications/applications']();
                return applicationsData();
            }
            else{
                //return store.getters['applications/applications'](searchData.value);
                return applicationsData(searchData.value)
            }
            
        })
        console.log("applications : " + applications.value)
        //const applications_count = 
        //computed(() => store.getters['applications/applications_count'])

        onMounted(() => {
            if (!applications_count){
                axiosGet('/db/applications',(data) => {
                    console.log("onMounted",data)
                    //store.dispatch('applications/setApplications', data.data)
                    setApplications(data.data)
                })
            }
        })

        return {
            applications_count,
            applications,
            searchData
        }
    },
    components : {
        AppCard
    }
}
</script>