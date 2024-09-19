<template>
    <div>
      <h2>Login</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          // Використовуємо authService для авторизації
          const response = await this.$auth.login({
            username: this.username,
            password: this.password
          });
          
          // Зберігаємо сесію користувача
          this.$session.setSession(response);
          console.log('Login successful:', response);
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
    }
  };
  </script>
  