const propertyList = JSON.parse(localStorage.getItem("Listing"))
? JSON.parse(localStorage.getItem("Listing"))
:[
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
    },{
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
    let listing = document.querySelector("#Listings");
    listing.innerHTML = '';
    listing.innerHTML += `
     <button id='sort' onclick="sorting()">sort</button>   
  <thead>
  <button id='add' onclick="addRecord()">add</button>   
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Image URL</th>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
      <th scope="col">Price</th>
      <th scope="col">Bedrooms</th>
      <th scope="col">Bathrooms</th>
      <th scope="col">Garages</th>
      <th scope="col">Size</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>`;
  propertyList.forEach((property) => {
    document.querySelector("#Listings").innerHTML += `
  <tbody>
    <tr>
      <th scope="row">${property.id}</th>
      <td>${property.image}</td>
      <td>${property.title}</td>
      <td>${property.location}</td>
      <td>${property.price}</td>
      <td>${property.specifications.bedrooms}</td>
      <td>${property.specifications.bathrooms}</td>
      <td>${property.specifications.garage}</td>
      <td>${property.specifications.size}</td>
      <button id='delete' onclick="deleteListing(id)"><i class="fa-regular fa-circle-minus"></i></button>
      <button id='update'><i class="fa-regular fa-pen-to-square"></i></button>
    </tr>
    
  </tbody>
`
    });

    
}

showProperty();

function deleteListing(id) {
    if(id > -1){
        lists.splice( id, 1);
        // After delete
        localStorage.setItem('Listing', JSON.stringify(propertyList) );
    }else {
        console.log('Name was not found');
    }
}


function deleteListing(id){
    const index=propertyList.indexOf(property =>{
        property.id === id
    })
    propertyList=propertyList.splice(index,1)
    showProperty()
}

//sorting
function sorting() {

    propertyList.sort((a,b)=>{
        return a.location < b.location? -1:1;
    });
    showProperty();
}

//adding
function addRecord(e) {
    e.preventDefault();
    lists.push(
        document.getElementById('Listing').value
    );
    // Save data to our localstorage
    localStorage.setItem('propertyList', JSON.stringify(lists));
}
document.querySelector('#add').addEventListener('onclick', addRecord);
console.log(JSON.parse(localStorage.getItem('propertyList')));