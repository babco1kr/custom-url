import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class ApplicationController extends Controller {

    latestUrlId = '';
    latestTargetUrl = '';
    latestTinyUrl = '';

    // This action creates the tiny url for the Url the user submits
    @action
    makeTinyUrl() {
            this.store.findRecord('create', this.get('urlGiven'))
            .then((url) => {
                this.set('latestUrlId', url.get('urlid'));
                this.set('latestTargetUrl', url.get('url'));
                this.set('latestTinyUrl', 'http://localhost:3000/' + url.get('tiny'));
                this.set('urlGiven', '')
            });
            
            
        }

    // This action is for the user to redirect to the tiny url from the front end. 
    @action
    getTinyUrl() {

            let urlArray = this.get('findUrl').split('/');
            let urlSearch;
            if (urlArray.length > 1) {
                urlSearch = urlArray[(urlArray.length - 1)]
            } else {
                urlSearch =urlArray[0]
            }

            this.store.findRecord('find', urlSearch)
            .then((url) => {
                let newLocation = url.get('url');
                window.location.href = newLocation;
            });
    }
        
}