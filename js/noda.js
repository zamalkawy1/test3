
var AllPizza=[];

document.querySelector("input").addEventListener("keyup",function(e){
    console.log(e.target.value);
    GetFood(e.target.value
        
        )
})

function GetFood(food){
var pizzaHut =new XMLHttpRequest();
pizzaHut.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${food}`);
pizzaHut.send();

pizzaHut.addEventListener("readystatechange",function(){
    
    if ( pizzaHut.readyState == 4 && pizzaHut.status == 200 && pizzaHut.status <300){                   
        AllPizza =JSON.parse(pizzaHut.response).recipes;
        console.log(AllPizza);

        DisplayRecipes();
        }
    
    
})
}

function DisplayRecipes(){
    var cartona="";
    for( var i =0 ;i < AllPizza.length ; i++){
        cartona +=`
            <div class="col-md-3">
                <div class="categ">
                    <a href="${AllPizza[i].source_url}">
                        <img src="${AllPizza[i].image_url}" class="w-100" alt="Photo">
                    </a>
                    <h4>${AllPizza[i].title}</h4>
                    <p>${AllPizza[i].publisher}</p>
                </div>
            </div>`
    }
    document.querySelector(".row").innerHTML=cartona;
}