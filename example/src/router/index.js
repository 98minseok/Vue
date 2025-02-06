import { useGlob } from "@/compositions/glob";
import { createRouter, createWebHistory } from "vue-router";



const viewModules = import.meta.glob("@/view/*.vue", { eager: true });
console.log(viewModules);
const routes = Object.keys(viewModules).map((filePath) => {
  const name = filePath.split("/").pop().replace(".vue", "");
  return {
    path: `/${name}`,
    component: viewModules[filePath].default,
    name
  };
});

routes.push({
  path : '/',
  redirect : 'Home'
})

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const {files} = useGlob("components/home")
console.log(files);
Object.keys(files).forEach((filePath) => {
  const name = filePath.split('/').pop().replace(".vue","");
  router.addRoute('Home',{
    name,
    path : `/${name}`,
    component : files[filePath].default,
  })
})
export default router;
