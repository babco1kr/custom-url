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

            this.store.findRecord('find', this.get('findUrl'));
            // alert(`SUBMITTED ${this.get('findUrl')}`);
            // fetch(`http://localhost:3000/find/${this.get('findUrl')}`)
            // .then((response) => {
            //     return response.json();
            // }).then((data) => {
            //     console.log(data);
            // })

            // const url = await fetch(`http://localhost:3000/find/${this.get('findUrl')}`)
            // await console.log(url);

    }
        
}