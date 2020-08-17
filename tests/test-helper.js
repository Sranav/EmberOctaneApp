import Application from 'ember-octane-app/app';
import config from 'ember-octane-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
