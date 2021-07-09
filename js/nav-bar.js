class NavBar{
    
    constructor(btnMenu,listNav, btnLinks){
        this.btnMenu = document.querySelector(btnMenu);
        this.listNav = document.querySelector(listNav);
        this.btnLinks = document.querySelectorAll(btnLinks);
        this.acClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animationLink(){

        this.btnLinks.forEach((link, inx) =>{
            if(link.style.animation){
                link.style.animation = "";
                
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${(inx/7)+0.4}s`;
            }
        });

    }
    handleClick(){
        
        this.listNav.classList.toggle(this.acClass);
        this.btnMenu.classList.toggle(this.acClass);
        this.animationLink();
    }
    addClickEvent(){

        this.btnMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.btnMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const navBar = new NavBar(".interface-moblie",".list-nave",".item-nav"); 

navBar.init();