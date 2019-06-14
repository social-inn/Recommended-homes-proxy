import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 280,
  duration: '3m',
  rps: 280
};

export default function() {
  let res = http.get('http://localhost:3333/rooms/' + Math.ceil(Math.random() * 10000000));
  check(res, {
    'status was 200': (r) => r.status == 200
  });
};