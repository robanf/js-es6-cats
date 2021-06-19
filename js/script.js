//Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti=[
    {
        nome:"pamela",
        colore:"#FFFF00",
        eta:4,
        gender:"female"
    },
    {
        nome:"franco",
        colore:"#008000",
        eta:5,
        gender:"male"
    },
    {
        nome:"yumi",
        colore:"#0000FF",
        eta:6,
        gender:"female"
    },
    {
        nome:"maurizio",
        colore:"",
        eta:7,
        gender:"male"
    },
    {
        nome:"jessy",
        colore:"#800000",
        eta:8,
        gender:"female"
    },
    {
        nome:"linobanfi",
        colore:"#008000",
        eta:9,
        gender:"male"
    }
];

gatti.forEach((element)=> {
    document.getElementById("gatti").innerHTML +=`
    ${element.nome}  <i class="fas fa-cat" style="color:${element.colore}"></i>,  
    `
});


//Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.


const pink = "#E7120F";
const blue = "#211CBB";

const newgatti=gatti.map((element)=>{
    let {nome,colore,eta,gender}=element;

    const opacity=element.eta/9;

    return{
        nome,
        colore,
        eta,
        gender,
        fiocco:{
            colore:(gender == "female") ? pink : blue,
            opacity
        }
    }
});

const stampagatti=(array)=>{
array.forEach((element)=> {
    document.getElementById("gatti").innerHTML +=` <br>
    ${element.nome}  <i class="fas fa-cat" style="color:${element.colore}"></i>,  
    <i class="fas fa-ribbon" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacity}"></i>
    `
})};

stampagatti(newgatti);


const malegatti=newgatti.filter((element)=>{
    if(element.gender=="male"){
        return element;
    }
});

stampagatti(malegatti);

const femgatti=newgatti.filter((element)=>{
    if(element.gender=="female"){
        return element;
    }
});

stampagatti(femgatti);


const femandmalegatti=[...femgatti,...malegatti];

const ultimogatti=femandmalegatti.map((element)=>{
    const {nome, colore, fiocco}=element;

    return{
        nome,
        colore,
        fiocco
    }
});

stampagatti(ultimogatti);

console.log(ultimogatti);

