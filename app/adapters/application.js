import RESTAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends RESTAdapter {

    host = 'http://localhost:3000'
}
