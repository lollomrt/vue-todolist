const { createApp } = Vue;

createApp({
    data(){
        return{
            listItem: 0,
            newItem: "",
            toDoList: [
                {
                    text: "Uova",
                    done: false
                },
                {
                    text: "Pane proteico",
                    done: true
                },
                {
                    text: "Crocchette per il cane",
                    done: true
                },
                {
                    text: "Latte",
                    done: false
                },
                {
                    text: "Fagioli in scatola",
                    done: false
                },
                {
                    text: "Budino proteico",
                    done: true
                },
                {
                    text: "Fesa di tacchino",
                    done: false
                }
            ]
        }
    },
    methods:{
        check(index){
            let singleItem = this.toDoList[index]
            if (singleItem.done == false){
                singleItem.done = true
            }
            else {
                singleItem.done = false
            }
        },
        deleteItem(index){
            this.toDoList.splice(index, 1)
        },
        createNewItem(){
                let object = {
                text: this.newItem,
                done: false
            }
            this.toDoList.push(object)
            this.newItem = ""
        }
    }
}).mount("#app")
