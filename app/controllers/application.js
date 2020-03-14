import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class ApplicationController extends Controller {

    latestUrlId = '';
    latestTargetUrl = '';
    latestTinyUrl = '';

    @action
    makeTinyUrl() {
            this.store.findRecord('create', this.get('urlGiven'))
            .then((url) => {
                console.log(url.get('tiny') + ' ' + url.get('url') + ' ' + url.get('urlid'));
                this.set('latestUrlId', url.get('urlid'));
                this.set('latestTargetUrl', url.get('url'));
                this.set('latestTinyUrl', url.get('tiny'));
            });
            
        }

    // This action is for the user to redirect to the tiny url from the front end. 
    @action
    async getTinyUrl() {

            this.store.findRecord('find', this.get('findUrl'))
            .then((url) => {
                let newLocation = url.get('url');
                window.location.href = newLocation;
            });
    }
        
}