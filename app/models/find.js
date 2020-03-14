import Model, {attr} from '@ember-data/model';

export default class FindModel extends Model {
    @attr url;
    @attr tiny;
}
