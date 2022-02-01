<template>
  <q-layout class="flex flex-center" style="background-color: #44c8f5">
    <Form @submit="handleLogin" :validation-schema="schema">
      <q-card style="width: 500px; height: 700px">
        <img
          alt="Quasar logo"
          src="~assets/Logo-howest-SPORT.png"
          style="width: 300px; height: 300px; margin: 0 auto; margin-top: 0px"
        />
        <h1 style="text-align: center; font-size: 40px; margin-top: -20px">
          Scorebord Sportscube
        </h1>
        <div style="margin-left: 50px; margin-right: 50px">
          <div style="margin-bottom: 30px">
          <label style="margin-right:20px;" for="Naam">Username</label>
          <Field name="Naam" type="text" class="form-control" />
          <ErrorMessage style="margin-left:10px;" name="Naam" class="error-feedback" />
          </div>
          <div style="margin-bottom: 30px"> 
          <label style="margin-right:20px;" for="Wachtwoord">Password</label>
          <Field name="Wachtwoord" type="password" class="form-control" />
          <ErrorMessage style="margin-left:10px;" name="Wachtwoord" class="error-feedback" />
          </div>
          <div style="text-align: center; margin-top: 20px">
            <q-btn
              :disabled="loading"
              :loading="loadingAuth"
              :ripple="{ color: 'white' }"
              label="Login"
              type="submit"
              style="width: 100%; height: 50px; font-size: 18px; margin-top:30px;"
              color="primary"
            />
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </div>
      </q-card>
    </Form>
  </q-layout>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      Naam: yup.string().required("Username is required!"),
      Wachtwoord: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/Group");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/Group");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
