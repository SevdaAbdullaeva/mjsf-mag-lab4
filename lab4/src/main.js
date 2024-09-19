import { createApp } from 'vue';
import App from './App.vue';

// Підключаємо плагіни
import serviceProvider from './plugins/serviceProvider';
import registerProvider from './plugins/registerProvider';

const app = createApp(App);

// Реєструємо сервіси через registerProvider
app.use(registerProvider, {
  $api: serviceProvider.apiService,
  $auth: serviceProvider.authService,
  $session: serviceProvider.sessionService
});

app.mount('#app');
