function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () =>{
        document.addEventListener('click', event =>{ 
            const el = event.target; //captura o botão que foi clicado
            if(el.classList.contains('btn-num')) //se no botão tiver a classe btn-num
                this.addNumDisplay(el); //passa o botão que foi clicado para o metodo addNumDisplay
            
            if(el.classList.contains('btn-clear'))
                this.clear();
            
            if(el.classList.contains('btn-del'))
                this.del();

            if(el.classList.contains('btn-eq'))
                this.realizaConta(el);
        });
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText; //adicionando o botão que foi passado ao display
    };

    this.clear = () => {
        this.display.value = ''; //limpa o display
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1); //retorna a cadeia do inicio até o penultimo
    }

    this.realizaConta () => {
        try{
            const conta = eval(this.display.value);

            if(!conta) {
                alert('conta inválida');
                return
            }

            this.display.value = conta;
        }
        catch(e){
            alert('conta inválida');
            return;
        }
    }

    this.capturaEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.keyCode !== 13) return;

            this.realizaConta();
        });
    }

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

}

const calculadora = new Calculadora();
calculadora.inicia();