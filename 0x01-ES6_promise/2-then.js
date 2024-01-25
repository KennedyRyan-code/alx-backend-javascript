/* eslint-disable no-console */
export default function handleResponseFromAPI(promise) {
  promise
    .then((resolvedValue) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((rejectedError) => {
      console.error(rejectedError);
      return new Error();
    });
}
