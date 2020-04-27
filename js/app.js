new Vue({
    el: "#app",
    data: {
        titulo: "CRUD - NOTE",
        notas: [],
        newNota: "",
        colorNotaTrue: "--bg-primary",
        colorNotaFalse: "--bg-red"
    },
    methods:{
        agregarNota(){
            this.notas.push({nombre:this.newNota,estado:false});
            this.newNota= ""
        },
        cambiarEstado(index){
            if(this.notas[index].estado==false){
                this.notas[index].estado=true
            }else if(this.notas[index].estado==true){
                this.notas[index].estado=false
            }
        },
        eliminarNota(index){
            this.notas.splice(index,1)
        }
    }
});