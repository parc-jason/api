'use strict'

const Resource = require('../libraries/Resource');

module.exports = class Submission extends Resource {
  constructor(model, router) {
    super(model, router);
    this.register('use', this.route + '/exists', 'exists');
  }

  get route() {
    return 'form/:formId/' + this.name;
  }

  exists(req, res, next) {

  }
};
