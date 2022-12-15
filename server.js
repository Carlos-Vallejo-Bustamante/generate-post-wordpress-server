const app = require("./app");

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on https://generate-post-wordpress-api.onrender.com/`);
});
