import { environment } from '../environments/environment';
// Gestion de urls
export const URLS = {
    login:                environment.apiUrl + 'login/',
    logout:               environment.apiUrl + 'logout/',
    password_change:      environment.apiUrl + 'password/change/'
}