import { apiService } from '../services/apiService';
import { authService } from '../services/authService';
import { sessionService } from '../services/sessionService';

export default {
  apiService,    // Експортуємо сервіс API
  authService,   // Експортуємо сервіс авторизації
  sessionService // Експортуємо сервіс управління сесією
};
