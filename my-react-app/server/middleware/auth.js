// Authorization
const routeAuthorization = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    next();
  } else {
    res.status(200).json({ mes: "Invalidee Token", token: authorization });
  }
};
export default routeAuthorization;
