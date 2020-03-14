import Model, { attr } from '@ember-data/model';

export default class CreateModel extends Model {
    @attr url;
    @attr tiny;
    @attr urlid;
}
