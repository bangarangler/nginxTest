const helloWorld = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Hello World!" });
  } catch (err) {
    console.log("err", err);
  }
};

exports.helloWorld = helloWorld;
