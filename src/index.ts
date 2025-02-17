import app from "./app";
// TODO: logger
// TODO: env file
const port = 3000;

const server = app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});

export default server;
