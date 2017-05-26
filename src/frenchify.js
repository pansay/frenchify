var rules = require('../rules.json');

module.exports = function(content) {

    rules.forEach(function(rule) {
        content = content.replace(new RegExp(rule.from, 'gmi'), rule.to);
    });
    console.log(content);
    return content;
};