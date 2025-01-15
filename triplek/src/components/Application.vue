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
    <input v-model="applicationsFormData.name" name ="name">
    <input v-model="applicationsFormData.content" name ="content">
    <input v-model="applicationsFormData.url" name ="url">
    <button @click ="() => {onClickSubmit(evt)}">제출하기</button>
</template>

<script>
    import { useStore } from 'vuex';
    import { ref, onMounted , computed, reactive } from 'vue'
    import AppCard from './AppCard.vue';
    import useAxios from '../modules/axios'
import { useApplications } from '../compositions/useApplications';
export default{
    name : "Application",
    setup(){
        const searchData = ref("")
        //const store = useStore()
        const {axiosGet,axiosPost} = useAxios()
        const {applicationsData,applications_count,setApplications} = useApplications();
        const applicationsFormData = reactive({

        })

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

        const onClickSubmit = (evt) => {
            if(evt){
                evt.preventDefault();
            }
            console.log("onClickSubmit")
            console.log(applicationsFormData)
            axiosPost('/applications',applicationsFormData,() => {console.log("성공")},() => {console.log("실패")})
        }
        console.log("applications : " + applications.value)
        //const applications_count = 
        //computed(() => store.getters['applications/applications_count'])

        onMounted(() => {
                console.log("onMounted")
                axiosGet('/applications',(data) => {
                    console.log("onMounted",data)
                    //store.dispatch('applications/setApplications', data.data)
                    console.log("data.data")
                    console.log(data.data);
                    setApplications(data.data)
                })
        })
        console.log("Applications")
        console.log(applications.value)
        return {
            applications_count,
            applications,
            searchData,
            applicationsFormData,
            onClickSubmit
        }
    },
    components : {
        AppCard
    }
}
</script>