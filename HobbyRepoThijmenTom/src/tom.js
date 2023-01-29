import { LitElement, css, html } from 'lit'


export class tom extends LitElement{

    static get properties(){
        return{

        }
    }

    constructor() {
        super();

    }

    render() {
        return html`
            
            <h1>Hobby Project Tom</h1>
        `
    }


    static get styles(){
        return css`
        
        `
    }
}
window.customElements.define("tom-comp", tom)