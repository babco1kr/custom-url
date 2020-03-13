import Controller from '@ember/controller';
import { action } from "@ember/object";

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
            // alert(`SUBMITTED ${this.get('findUrl')}`);
            // fetch(`http://localhost:3000/find/${this.get('findUrl')}`)
            // .then(function(data) {
            //     console.log(data.json());
            // })

            const url = await fetch(`http://localhost:3000/find/${this.get('findUrl')}`)
            await console.log(url);

    }
        
}

