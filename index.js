const properties = JSON.parse(localStorage.getItem("properties"))
?JSON.parse(localStorage.getItem("properties")):[
    {
        id:1,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:2,
        image:'https://i.postimg.cc/gJZrZdh5/image2.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$770 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)",
            size:"1800 Sq ft"
        },
    },
    {
        id:3,
        image:'https://i.postimg.cc/vZKQLkGd/image3.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$460 000",
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            size:"1540 Sq ft"
        },
    },
    {
        id:4,
        image:'https://i.postimg.cc/2j1gnyV3/image4.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$600 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    },
    {
        id:5,
        image:'https://i.postimg.cc/RZSRQpXG/image5.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$680 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    },
    {
        id:6,
        image:'https://i.postimg.cc/bvKkMmH7/image6.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$700 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"1800 Sq ft"
        },
    },
    {
        id:7,
        image:'https://i.postimg.cc/DzP0n5qJ/image7.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$580 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1500 Sq ft"
        },
    }, 
    {
        id:8,
        image:'https://i.postimg.cc/zD6zm492/image8.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$830 000",
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
        title: "Apartment",
        location: "Cape Town",
        price: "$790 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "1 garage(s)" ,
            size:"2500 Sq ft"
        },
    },
    {
        id:10,
        image:'https://i.postimg.cc/4ydQzYJP/image10.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$785 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1950 Sq ft"
        },
    },
    {
        id:11,
        image:'https://i.postimg.cc/RZrrSHQw/image11.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$670 000",
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1  bathroom(s)",
            garage: "1 garage(s)",
            size:"1700 Sq ft"
        },
    }
]

function showProperty(properties) {
    properties.forEach((property) => {
        document.querySelector("#propertyList").innerHTML += `
      <div>
      <img src=${property.image} />
      <h4>${property.title}</h4>
      <h5>${property.price}</h5>
      <p>${property.location}</p>
      <p font-size=10px>${property.specifications.bedroooms}</p>
      <p>${property.specifications.bathrooms}</p>
      <p>${property.specifications.garage}</p>
      <p>${property.specifications.size}</p>
      </div>`
    })
}
showProperty(properties);