<template>
  <div id="register">
    <h3>Register</h3>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="input">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group> -->

        <b-form-group id="input-group-2" label="Password:" label-for="input-3">
          <b-form-input id="input-2" v-model="form.password" required placeholder="Password"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Register</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result" style="display: none">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
.input{
    width: fit-content;
    text-align: center;
    align-content: center;
    margin: 0 auto;
}
#register{
 position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
}
button{
  margin: 2pt;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        //name: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      //this.form.name = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>