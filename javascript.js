class AppSidebarButton extends HTMLElement{
    constructor(){
        super()
        let template = document.getElementById("app-side-button");//получает шаблон элемента с id
        let templateContent = template.content;
        
        const shadowRoot = this.attachShadow({mode: "open" });//создаем shadow dom и добавляем клон шаблона в shadow dom  
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
    connectedCallback() { 
        const textContainer = this.shadowRoot.querySelector('.text');//установка текста
        textContainer.innerHTML = this.getAttribute('text');

        const unreadCount = this.getAttribute('unreadCount');
       
       if(unreadCount > 0){//обраюотка атрибута unreadCount
       this.shadowRoot.querySelector('.unreadCount').innerHTML = unreadCount ;
       textContainer.classList.add('bold')
       }
    }

    disconnectedCallback(){
        
    }

}

window.customElements.define('app-side-button', AppSidebarButton);