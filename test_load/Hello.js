import http from "k6/http";
import { check } from "k6";

export default function (appUrl) {
  const response = http.get(appUrl);
  check(response, {
    "is status 200": (r) => r.status === 200
  });
}
