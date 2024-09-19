<template>
    <div>
      <h2>Fetched Data</h2>
      <div v-if="data">{{ data }}</div>
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: null
      };
    },
    methods: {
      async fetchData() {
        try {
          // Використовуємо apiService для отримання даних з API
          this.data = await this.$api.fetchData('/api/data-endpoint');
          console.log('Data fetched:', this.data);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      }
    }
  };
  </script>
  