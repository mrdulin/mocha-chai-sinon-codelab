const BookModel = require("./bookModel");

exports.create_a_book = function(req, res) {
  BookModel.createBook(req.body).then((book) => {
    console.log("book: ", book);
    res.status(200).send({ id: book._id });
  });
};
