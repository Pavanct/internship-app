import LandingPage from "../pages/LandingPage";
import StudentList from "../pages/StudentList"; 

const router = new VueRouter({
 routes: [
    {
      path: "/",
      component: LandingPage,
      redirect: "/landingpage",
      children: [
        {
          path: "landingpage",
          name: "LandingPage",
          component: LandingPage
        },
        {
          path: "studentlist",
          name: "StudentList",
          component: StudentList
        }
      ]
    }
  ]
})

export default routes;
