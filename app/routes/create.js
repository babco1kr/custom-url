import Route from '@ember/routing/route';

export default class CreateRoute extends Route {
    model(id) {
        return this.store.findRecord('create', id);
    }
}
