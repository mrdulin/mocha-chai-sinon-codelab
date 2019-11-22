const obj = {
  myFunction: function(data) {
    const file = new Blob(data, { type: "text/plain" });
    window.open(window.URL.createObjectURL(file));
  },
};

module.exports = obj;
