module.exports = function(app,models) {
    require("./services/user.service.server.js")(app,models);
    require("./services/property.service.server.js")(app,models);
    require("./services/review.service.server.js")(app,models);
    require("./services/attachment.service.server.js")(app,models);

};
