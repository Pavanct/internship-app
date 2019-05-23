<template>
    <div>
        <StudentList />
        <Login />
        <h1>Welcome to Internship App</h1>
    </div>
</template>
<style scoped>

</style>
<script>
import StudentList from "./StudentList";
import Login from "./Login";
export default {
    name: "LandingPage",
    components: {
        StudentList,
        Login
    }
}
</script>

