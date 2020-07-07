const User = require("../userSchema");

const getUserById = async (request, response) => {
  try {
    const id = request.params.id;
    const findUser = await User.findById(id);
    response.status(200).json({
      status: "success",
      user: findUser,
    });
  } catch (error) {
    response.status(400).json({
      status: "error",
      message: error.message,
      text: "user was not found",
    });
  }
};

module.exports = getUserById;
