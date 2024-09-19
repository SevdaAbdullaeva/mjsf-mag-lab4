import { apiService } from './apiService';

export const authService = {
  login(credentials) {
    return apiService.fetchData('/login', credentials);
  },
  logout() {
    // Логіка для виходу з системи
  }
};