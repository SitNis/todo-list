let counter = 0
class Element{
    constructor (name,text,priority){
        this.name = name;
        this.text = text;
        this.priority = priority;
    }
    render(){
        const div = document.createElement('div')
        const title = document.createElement('h3')
        const textarea = document.createElement('textarea')
        const priority = document.createElement('p')
        title.insertAdjacentText("afterbegin",this.name)
        textarea.value = this.text
        textarea.setAttribute('id','newTextarea')
        textarea.readOnly = true
        priority.insertAdjacentText("afterbegin",this.priority)
        priority.insertAdjacentText("afterbegin",'Приоритет:')
        div.insertAdjacentElement("beforeend",title)
        div.insertAdjacentElement("beforeend",textarea)
        div.insertAdjacentElement("beforeend",priority)
        div.setAttribute('id',counter)
        const button2 = document.createElement('button')
        button2.setAttribute('id','readyButton')
        button2.insertAdjacentText("beforeend",'Готово')
        
        button2.addEventListener('click', (event) =>{
            div.childNodes[div.childNodes.length-1].remove()
            div.insertAdjacentElement("beforeend",button3)
            document.getElementById('compl').insertAdjacentElement("beforeend",div)
            
        });
        const button3 = document.createElement('button')
        button3.setAttribute('id','errorButton')
        button3.insertAdjacentText("beforeend",'Не готово')
        button3.addEventListener('click',(event) =>{
            div.childNodes[div.childNodes.length-1].remove()
            div.insertAdjacentElement("beforeend",button2)
            document.getElementById('containerId').insertAdjacentElement("beforeend",div)
            
        })

        div.insertAdjacentElement("beforeend",button2)
        this.element = div
        counter++
        console.dir(div)
        return this
    }
    insert(node){
        node.insertAdjacentElement("beforeend",this.element)
    }
}