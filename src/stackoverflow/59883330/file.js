function writeTOFile(server, pin) {
  const dContinue = confirm("You are uploading a file . Do you want to continue?");
  if (dContinue) {
    console.log("do something");
  } else {
    console.log("do another thing");
  }
}

module.exports = { writeTOFile };
