export default {
    install(app, providers) {
      // Реєструємо кожен провайдер, переданий через параметр providers
      Object.keys(providers).forEach(key => {
        app.config.globalProperties[key] = providers[key];
      });
    }
  };