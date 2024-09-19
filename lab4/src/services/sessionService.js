export const sessionService = {
    getSession() {
      return localStorage.getItem('userSession');
    },
    setSession(sessionData) {
      localStorage.setItem('userSession', JSON.stringify(sessionData));
    },
    clearSession() {
      localStorage.removeItem('userSession');
    }
  };