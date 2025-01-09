export const applications = {
    namespaced : true,
    state : () => ({
        applications: [],
    }),
    getters : {
        applications_count : (state) => {
            return state.applications.length
        },
        applications : (state) => (filter = null) => {
            console.log("getter 작동")
            console.log("state : " ,state)
            if (filter) {
                return state.applications.filter((i) => i.name.includes(filter))
            }
            return state.applications
        }
    },
    mutations : {
        SET_DATA(state,data){
            state.applications = data
        }
    },
    actions : {
        setApplications : ({commit} , data) =>{
            if (data.length>0){
                console.log("data commit : ", data)
                commit('SET_DATA',data)
            }
        }
    }
}