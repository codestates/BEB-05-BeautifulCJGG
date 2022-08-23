const ICToken = artifacts.require("ICToken");

module.exports = function (deployer) {
  // constructor의 요구사항에 맞게 뒤에 두 개의 파라미터를 넣어줌!
  deployer.deploy(ICToken, "ICToken", "ICT");
};

