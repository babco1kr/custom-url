import Route from '@ember/routing/route';

export default class FindRoute extends Route {
    model(id) {
        return this.store.findRecord('find', id);
    }
}
