/* eslint-disable no-param-reassign */
module.exports = (req, res, next) => {
  if (req.url === '/api/v1/related/1') {
    res.body = {
      ads: res.body,
    }
  }
  console.log(res.body);
  next();
};
