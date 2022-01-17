//cargarmas

let productoss=document.querySelectorAll(".searchProduct");
let cargar10=document.querySelector(".cargar10");
console.log(productoss);
for(let i=5; i<productoss.length; i++){
      productoss[i].classList.add("hidden3");
}
let variable=10;
cargar10.addEventListener("click",function(){
	let auxiliar=productoss.length-variable;
	if(auxiliar<0){
		for(let i=variable-5; i<variable+auxiliar; i++){
			productoss[i].classList.remove("hidden3");
		}
	}
	else{
		for(let i=variable-5; i<variable; i++){
			productoss[i].classList.remove("hidden3");
		}
	}
	console.log(variable)
	variable=variable+5;
})
