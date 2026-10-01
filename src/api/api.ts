import axios from 'axios';

// Plataform é para identificar em qual ambiente estamos executando
import { Platform } from 'react-native'

// IP LOCAL PADRÃO do Android é 10.0.2.2
export const API_BASE_URL = Platform.OS === 'android' ? 
    'http://10.0.2.2:3000' : 'http://localhost:3000'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // define que a requisição pode esperar no maximo 
    headers: {
        'Content-Type' : 'application/json', // enviando JSON
        Accept: 'application/json' // esperando respopsta JSON
    }
})


export default api;