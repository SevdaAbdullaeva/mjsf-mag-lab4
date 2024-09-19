<template>
    <div>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        this.$auth.login({ username: 'test', password: '12345' }).then(response => {
          this.$session.setSession(response); // Використовуємо sessionService
          console.log('User logged in:', response);
        });
      }
    }
  };
  </script>
  