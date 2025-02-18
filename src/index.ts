import app from "./app";
// TODO: logger
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});

export default server;
