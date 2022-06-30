let propertyList = JSON.parse(localStorage.getItem("propertyList"))
? JSON.parse(localStorage.getItem("propertyList")):[
    {
        id:1,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Apartment",
        location: "Bo-Kaap",
        price: 876000,
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },{
        id:2,
        image:'https://i.postimg.cc/gJZrZdh5/image2.jpg',
        title: "Apartment",
        location: "Bo-Kaap",
        price: 770000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)",
            size:"1800 Sq ft"
        },
    },{
        id:3,
        image:'https://i.postimg.cc/vZKQLkGd/image3.jpg',
        title: "Apartment",
        location: "Camps Bay",
        price: 460000,
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            size:"1540 Sq ft"
        },
    },{
        id:4,
        image:'https://i.postimg.cc/2j1gnyV3/image4.jpg',
        title: "Multi family",
        location: "Camps Bay",
        price: 600000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    },{
        id:5,
        image:'https://i.postimg.cc/RZSRQpXG/image5.jpg',
        title: "Condo",
        location: "Sea Point",
        price: 680000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    },{
        id:6,
        image:'https://i.postimg.cc/bvKkMmH7/image6.jpg',
        title: "Villa",
        location: "Sea Point",
        price: 700000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"1800 Sq ft"
        },
    },{
        id:7,
        image:'https://i.postimg.cc/DzP0n5qJ/image7.jpg',
        title: "Apartment",
        location: "Camps Bay",
        price: 580000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1500 Sq ft"
        },
    },{
        id:8,
        image:'https://i.postimg.cc/zD6zm492/image8.jpg',
        title: "Maultifamily",
        location: "Bo-Kaap",
        price: 830000,
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2200 Sq ft"
        },
    },
    {
        id:9,
        image:'https://i.postimg.cc/FHq81QVw/image9.jpg',
        title: "Condo",
        location: "Sea Point",
        price: 790000,
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)" ,
            size:"2500 Sq ft"
        },
    },{
        id:10,
        image:'https://i.postimg.cc/4ydQzYJP/image10.jpg',
        title: "Apartment",
        location: "Camps Bay",
        price: 785000,
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1950 Sq ft"
        },
    },{
        id:11,
        image:'https://i.postimg.cc/RZrrSHQw/image11.jpg',
        title: "Condo",
        location: "Camps Bay",
        price: 670000,
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1  bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    }
]

function showProperty() {
    let listing = document.querySelector("#properties");
    listing.innerHTML = '';
//     listing.innerHTML += `
//    `;
  propertyList.forEach((property) => {
    document.querySelector("#properties").innerHTML += `
    <li class="card" style="width: 18rem;">
  <img src="${property.image}" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">${property.title}</h5>
    <h5 class="card-title"> <i>${property.price}</i></h5>
    <p class="card-text">${property.location}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${property.specifications. bedroooms}</li>
    <li class="list-group-item">${property.specifications.bathrooms}</li>
    <li class="list-group-item">${property.specifications.garage}</li>
    <li class="list-group-item">${property.specifications.size}</li>
  </ul>
</li>`
    });
}

showProperty(propertyList);



// searchbar
const properties = document.getElementById('properties')
const searchBar = document.getElementById('searchBar')


searchBar.addEventListener('keyup', (e) => {
const searchString = e.target.value.toLowerCase();
console.log(propertyList.filter((property) => {
    return property == searchString;
} ));
});



//sort prices
// propertyList.forEach((property) => {
// propertyList.sort((a, b) => {return a.property.price-b.property.price});
// console.log(propertyList)
// })


//sorting
function defaultOrder(){
    propertyList.sort((a, b)=>{
        return a.price-b.price
    });
    showProperty();
}
function changeOrder(){
    propertyList.sort((a, b)=>{
        return b.price-a.price
    });
    showProperty();
}

function campsbay(location) {
    propertyList = propertyList.filter(property => property.location === "Camps Bay") 
    showProperty()
}
function bokaap(location) {
    propertyList = propertyList.filter(property => property.location === "Bo-Kaap") 
    showProperty()
}
function seapoint(location) {
    propertyList = propertyList.filter(property => property.location === "Sea Point") 
    showProperty()
}
