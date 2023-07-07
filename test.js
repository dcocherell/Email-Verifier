import { check } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 10,  // 10 virtual users
    duration: '30s',  // 30 seconds
};

export default function () {
    const url = 'http://localhost:8081/request-registration';
    const payload = JSON.stringify({
        email: "test@example.com",
    });
    const headers = { 'Content-Type': 'application/json' };
    
    // Send a POST request
    const response = http.post(url, payload, { headers: headers });

    // Check if the status of the response is 204
    check(response, {
        'is status 204': (r) => r.status === 204,
    });
}
