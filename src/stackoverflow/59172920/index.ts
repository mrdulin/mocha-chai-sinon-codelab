export const pingHandler = (request, response, next) => {
  response.status(200).send('Hello world');
}