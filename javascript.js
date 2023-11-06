class AppSidebar extends HTMLElement{
    constructor(){
        super()
        
    }
    connectedCallback() { 
        this.innerHTML = "This is a card";
        console.log('Our element is added from DOM');
    }

    disconnectedCallback(){
        console.log('Our element is removed from DOM');
    }

}

window.customElements.define('app-sidebar', AppCard);

const appCard1 = document.createElement('app-sidebar');
document.body.append(appCard1);










/*
    connectedCallback() { 
        const compose = document.createElement('button');
        compose.textContent = this.getAttribute('compose');
        this.appendChild(compose);
    
    }

    disconnectedCallback(){
        console.log('Our elememt removed from DOM')
    }
}


window.customElements.define('app-side-button', AppSidebar);
const appSidebar = document.createElement('app-sidebar-button');
//const compose = document.getElementById('compose');

//compose.replaceWith(document.createElement('app-sidebar-button'));
//document.querySelector('app-sidebar-button').setAttribute('text', 'Button 1');
//const appSidebar1 = document.createElement('app-sidebar-button');
//document.body.append(appSidebar1);
appSidebar.setAttribute('compose', 'Button 1');
document.body.appendChild(AppSidebar); 
*/