let propertyList = JSON.parse(localStorage.getItem("propertyList"))
? JSON.parse(localStorage.getItem("propertyList"))
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
        }
    },
    {
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
        }
    },
    {
        id:3,
        image:'https://i.postimg.cc/vZKQLkGd/image3.jpg',
        title: "Apartment",
        location: "Camps Bay",
        price: 460000,
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            size:"1540 Sq ft"
        }
    },
    {
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
        }
    },
    {
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
        }
    },
    {
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
        }
    },
    {
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
        }
    },
    {
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
        }
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
        }
    },
    {
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
        }
    },
    {
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
        }
    }
]
console.log(JSON.parse(localStorage.getItem('propertyList')));


function showProperty() {
    let listing = document.querySelector("#Listings");
    listing.innerHTML = '';
//     listing.innerHTML += `
//    `;
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
      <button id='delete' onclick="deleteListing(${property.id})"><i class="fa-regular fa-circle-minus"></i></button>
      <button id='update'><i class="fa-regular fa-pen-to-square"></i></button>
    </tr>
    
  </tbody>
`
    });

    
}
//display list
showProperty();

function deleteListing(id) {
    propertyList = propertyList.filter(property => property.id !==id) 
    showProperty()
}



//sorting
function sorting(){
    propertyList.sort((a,b)=>{
        return a.location < b.location? -1:1;
    });
    showProperty();
}
function ascending(){
    propertyList.sort((a, b)=>{
        return a.price-b.price
    });
    showProperty();
}
function descending(){
    propertyList.sort((a, b)=>{
        return b.price-a.price
    });
    showProperty();
}

// adding
function addRecord(e) {
  const property= {
    id:propertyList.lenght+1,
    image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
    title: "Apartment 34",
    location: "sila",
    price: 8,
    specifications:{
        bedroooms: "3 bedroom(s)",
        bathrooms: "2 bathroom(s)",
        garage: "2 garage(s)",
        size:"20 Sq ft"

  }};
    propertyList.push(property);
    // Save data to our localstorage
    localStorage.setItem("propertyList", JSON.stringify(propertyList));
}
// document.querySelector('#add').addEventListener('onclick', addRecord);
// console.log(JSON.parse(localStorage.getItem('propertyList')));