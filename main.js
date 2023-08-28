let title = document.getElementById('title')
let price = document.getElementById('price')
let taxs = document.getElementById('taxs')
let ads = document.getElementById('ads')
let discound = document.getElementById('discound')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')

let mood = 'create';
let tmb;

function getTotal()
{
    if(price.value !=" "){
        let result = (+price.value + +taxs.value + +ads.value) - +discound.value;
        total.innerHTML = result;
    }     
}

let datapro;
if(localStorage.product != null){
    datapro= JSON.parse(localStorage.product)
}
else{
     datapro = [];
}

create.onclick =function(){
    let newpro ={
        title:title.value,
        price:price.value,
        taxs:taxs.value,
        ads:ads.value,
        discound:discound.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

    if(mood === 'create'){
        if(newpro.count > 1){
            for(let i = 0; i<newpro.count;i++){
                datapro.push(newpro);
            }
        }else{
            datapro.push(newpro)
        }

    }else[
        datapro[tmb] = newpro ,
        mood = 'create',
        create.innerHTML = 'create',
        count.style.display = 'block'
    ]



    localStorage.setItem('product', JSON.stringify(datapro) )
    console.log(datapro)

    clearData()
    showData()
}

function clearData(){
    title.value ='';
    price.value ='';
    taxs.value ='';
    ads.value ='';
    discound.value ='';
    total.innerHTML ='';
    count.value ='';
    category.value ='';
}

function showData()
{
    let table = '';
    for(let i = 0; i<datapro.length;i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxs}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discound}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="upDate(${i})">UPDATE</button></td>
            <td><button onclick="deleteData(${i})">DELETE</button></td>
        </tr> 
        `   
    }
    document.getElementById('tbody').innerHTML = table;
    let btndelete = document.getElementById('deleteall');
    if(datapro.length > 0){
        btndelete.innerHTML = `
        <button onclick="deleteall()">DELETE ALL (${datapro.length})</button>
        `
    }else{
        btndelete.innerHTML ='';
    }
}
showData()

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
}


function deleteall(){
    localStorage.clear()
    datapro.splice(0)
    showData()
}

function upDate(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxs.value = datapro[i].taxs;
    ads.value = datapro[i].ads;
    discound.value = datapro[i].discound;
    getTotal()
    count.style.display = 'none'
    category.value = datapro[i].category;
    create.innerHTML = 'UPDATE'
    mood = 'update';
    tmb=i;
    scroll({top:10 , behavior:'smooth'})
}




