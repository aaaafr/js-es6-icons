// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

var icons = [
	{
		name: 'cat',
		prefix: 'fas fa-cat',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fas fa-crow',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fas fa-dog',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fas fa-dove',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fas fa-dragon',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fas fa-horse',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fas fa-hippo',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fas fa-fish',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fas fa-carrot',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fas fa-apple-alt',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fas fa-lemon',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fas fa-pepper-hot',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fas fa-user-astronaut',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fas fa-user-graduate',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fas fa-user-ninja',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fas fa-user-secret',
		type: 'user',
		family: 'fas'
	}
];

console.log(icons);





// Milestone 2 Coloriamo le icone per tipo


let iconsAnimal = [], iconsVegetable = [], iconsUser = [];
icons.forEach((icon) => {
    if(icon.type === 'animal') { 
        icon.coloreIcona = 'blue';   
        iconsAnimal.push(icon)
    }else if(icon.type === 'vegetable'){
        icon.coloreIcona = 'orange';
        iconsVegetable.push(icon); 
    }else {
        icon.coloreIcona = 'purple';
        iconsUser.push(icon); 
    }
}); 

console.log(iconsAnimal, iconsVegetable, iconsUser);

document.getElementById("select").addEventListener("change", function () {
    let userSelect = document.getElementById("select").value;
    console.log(userSelect);
    let filtro = icons.filter((element) => {
        return element.type == userSelect
    })
    console.log(filtro);
    document.getElementById("icons").innerHTML = "";
    if(filtro.length > 0){
        filtro.forEach((icon, index) => {
            document.getElementById("icons").insertAdjacentHTML('beforeend', `
            <div class="icona">  
               <i class="fa ${icon.prefix}" style="color: ${icon.coloreIcona};"></i>  
               <h3>${icon.name}</h3> 
               </div>
        `)
        });
        
    }else {
        icons.forEach((icon, index) => {
            document.getElementById("icons").insertAdjacentHTML('beforeend', `
            <div class="icona">  
               <i class="fa ${icon.prefix}" style="color: ${icon.coloreIcona};"></i>  
               <h3>${icon.name}</h3> 
               </div>
        `)
        });
        
    }
}); 
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone



icons.forEach((icon, index) => {
    document.getElementById("icons").insertAdjacentHTML('beforeend', `
    <div class="icona">  
       <i class="fa ${icon.prefix}" style="color: ${icon.coloreIcona};"></i>  
       <h3>${icon.name}</h3> 
       </div>
`)
});


