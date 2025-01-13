export const useApplications = () => {
    const state = reactive({ applications : []})
    const applicationsData = (state) => (filter = null) => {
        if(filter) {
            return state.applications.filter((i) => i.name.includes(filter))
        }
        return state.applications
    }
    const applications_count = computed(() => state.applications.length)
    const SET_DATA = (data) => {
        state.applications = data;
    }
    const setApplications = (data) => {
        SET_DATA(data)
    }

    return {
        applicationsData,
        setApplications,
        applications_count

    }
}