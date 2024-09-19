<template>
    <div>
      <h2>Session Manager</h2>
      <div v-if="session">Session: {{ session }}</div>
      <button @click="clearSession">Clear Session</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        session: null
      };
    },
    mounted() {
      // Отримуємо сесію після завантаження компонента
      this.session = this.$session.getSession();
    },
    methods: {
      clearSession() {
        // Очищаємо сесію користувача
        this.$session.clearSession();
        this.session = null;
        console.log('Session cleared');
      }
    }
  };
  </script>
  