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
            <template id="mainTemplate">
                <style>
                    .spinner{
                        display: block;
                        height: 100px;
                        width: 100px;
                        border-radius: 50%;
                        border: 5px solid slateblue;
                        border-color: transparent red transparent red;
                        animation: rondje 2s linear infinite;
                        justify-content: center;
                        
                    
                    }
                    
                    
                    @keyframes rondje {
                        0% {
                            transform: rotate(0deg);

                        }
                        100% {
                            transform: rotate(360deg);
                            border-color: transparent red transparent red;
                        }
                        
                    }
                    
                </style>
                <div class="spinner"></div>
                
            </template>
            
            
            <div id="mainDiv" class="firstStage">
                <h1>Hobby Project Tom</h1>
                <button id="buttonID" @click="${this.clickEvent}">Click me</button>
            </div>    
            
            `
    }

    clickEvent(){
        const div = this.shadowRoot.querySelector("#mainDiv")
        if(div.className === "firstStage"){
            div.className = "secondStage";
            this.shadowRoot.getElementById("buttonID").remove();

        }else{
            div.className = "firstStage";
        }

        const template = this.shadowRoot.getElementById("mainTemplate");
        document.body.appendChild(template.content);


    }

    static get styles(){
        return css`
        
    
        div{
             border-width: 2px;
            border-radius: 5px;
            border-style: solid;
            transition: 3s;
        }
      
        
        .firstStage{
            justify-content: center;
            border-color: rebeccapurple;
           
            color: white;
        }
        
        .secondStage{
            border-color: red;
           
            color: red;
            padding-right: 100px;
            margin-right: 10px;
        
        }
        
        
        `
    }
}



window.customElements.define("tom-comp", tom)