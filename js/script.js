//Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti=[
    {
        nome:"pamela",
        colore:"#FFFF00",
        eta:1.5,
        gender:"female"
    },
    {
        nome:"franco",
        colore:"#008000",
        eta:1.5,
        gender:"male"
    },
    {
        nome:"yumi",
        colore:"#0000FF",
        eta:1.5,
        gender:"female"
    },
    {
        nome:"maurizio",
        colore:"",
        eta:1.5,
        gender:"male"
    },
    {
        nome:"jessy",
        colore:"#800000",
        eta:1.5,
        gender:"female"
    },
    {
        nome:"linobanfi",
        colore:"#008000",
        eta:1.5,
        gender:"male"
    }
];

gatti.forEach((element)=> {
    document.getElementById("gatti").innerHTML +=`
    ${element.nome}  <i class="fas fa-cat" style="color:${element.colore}"></i>,  
    `
});