import { LitElement, css, html } from 'lit'


export class home extends LitElement{

    static get properties(){
        return{

        }
    }

    constructor() {
        super();

    }

    render() {
        return html`
            <h1>Hobby Project <a href="/Thijmen">Thijmen</a> & <a href="/Tom">Tom</a></h1>
        `
    }


    static get styles(){
        return css`
        
        `
    }
}
window.customElements.define("home-comp", home)