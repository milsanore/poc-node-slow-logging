import Hello from "./Hello.js";

export const options = {
  stages: [
    { target: 100,  duration: "1s" },
    { target: 100,  duration: "5s" },
  ],
};

export default function () {
  Hello("http://localhost:3000");
}
