import http from 'k6/http';
import { check, sleep } from 'k6';

import uuid from './libs/uuid.js';

export default function () {
  const url = 'http://localhost:3333/signup';

  const payload = JSON.stringify(
    { email: `${uuid.v4().substring(24)}@qa.qacademy.com.br`, password: 'pwd123' }
  );

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  };

  const response = http.post(url, payload, headers);
  console.log(response.body);

  check(response, {
    'status should be 201': (res) => res.status === 201
  });  
  
  sleep(1);
}
 