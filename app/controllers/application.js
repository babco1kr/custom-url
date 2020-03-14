import Controller from '@ember/controller';
import { action } from "@ember/object";
// import fetch from 'ember-fetch';
export default class ApplicationController extends Controller {

    @action
    makeTinyUrl() {
            alert(`SUBMITTED ${this.get('urlGiven')}`);
            fetch(`http://localhost:3000/createUrl/${this.get('urlGiven')}`)
            .then(function(data) {
                console.log(data);
            })
        }

    @action
    async getTinyUrl() {

            this.store.findRecord('find', this.get('findUrl'))
            .then((url) => {
                let newLocation = url.get('url');
                window.location.href = newLocation;
            });
    }
        
}