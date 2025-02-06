import { ref, toValue, watchEffect } from "vue"

export function useFecth(url){
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    fetch(toValue(url))
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return {data,error}
}
