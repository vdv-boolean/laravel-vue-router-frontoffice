<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
      showSuccess: false,
      isSending: false,
      hasError: false,
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.hasError = true;
          }
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = true;
    },
  },
};
</script>

<template>
  <body>
    <div class="container">
      <h1>Contact Us</h1>

      <div
        v-if="hasError"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        errore nella compilazione!!
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div
        v-if="showSuccess"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        messaggio inviato con successo!!
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <form @submit.prevent="sendLead" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="name" class="form-control" id="name" v-model="name" />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            class="form-control"
            rows="5"
            v-model="message"
          ></textarea>
        </div>

        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="newsletter"
            v-model="newsletter"
          />
          <label class="form-check-label" for="newsletter"
            >subscribe to newsletter</label
          >
        </div>
        <button type="submit" class="btn btn-primary" :disabled="isSending">
          Submit
        </button>
      </form>
    </div>
  </body>
</template>

<style lang="scss" scoped>
body {
  height: calc(100vh - 21.5rem);
}
</style>
