module.exports = (req, res, next) => {
  if (req.user.role !== "user") {
    next();
  } 
  else {
    return res.status(401).send({ msg: "Unauthorized" });
  }
};