/* eslint-disable no-console */
import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`${photoResult.body.firstName} ${userResult.body.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
