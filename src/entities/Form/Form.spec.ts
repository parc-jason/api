import {assert} from 'chai';
import 'mocha-typescript';
import * as sinon from 'sinon';

// A fake db wrapper for stubbing.
const sandbox = sinon.createSandbox();

import app from '../../../test/mocks/app';
import db from '../../../test/mocks/db';
import {Model} from '../../dbs/Model';
import {Form as Schema} from './Schema';

describe('Form Tests', () => {
  const model = new Model(new Schema(app), db);

  afterEach(() => {
    sandbox.restore();
  });

  it('tests', (done) => {
    done();
  });
});