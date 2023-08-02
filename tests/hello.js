import http from 'k6/http';
import { check, sleep } from 'k6';

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
};

export default function () {
  const response = http.get('http://localhost:3333');
  check(response, {
    'status should be 200': (res) => res.status === 200
  });  
  
  sleep(1);
};
