import { LitElement, css, html } from 'lit'


export class thijmen extends LitElement{

    static get properties(){
        return{
            todos: {type: Array},
            todo: {type: String}
        }
    }

    constructor() {
        super();
        this.todos = [];
        this.todo = "";
    }

    render() {
        return html`
            <h1>Hobby Project Thijmen</h1>
            <div class="">
                <h2>todo list</h2>
                <form>
                    <input type="text" @input=${this._listenForTodo} />
                    <button type="button" @click="${this._addTodo}">voeg toe</button>
                </form>
                <ul>${this.todos.map((i) => html`<li>${i}</li>`)}</ul>
            </div>
        `
    }

    _listenForTodo(e){
        this.todo = e.target.value;
    }

    _addTodo(){
        this.todos = [...this.todos, this.todo]
        this.shadowRoot.querySelector('input').value = '';
    }


    static get styles(){
        return css`

            div {
                color: var(--main-color);
            }
            li {
                font-weight: bold;
            }
        `
    }
}
window.customElements.define("thijmen-comp", thijmen)