//navbar
function toggleNav(){ document.querySelector("#navbar").classList.toggle("active")
}

const properties = JSON.parse(localStorage.getItem("properties"))
? JSON.parse(localStorage.getItem("properties"))
:[
    {
        id:1,
        image:'<img src=image1.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: 3,
            bathrooms: 2,
            garage: 2,
            size:"2000 Sq ft"
        },
    },
    {
        id:2,
        image:'<img src=image2.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$770 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 2,
            garage: 1,
            size:"1800 Sq ft"
        },
    },
    {
        id:3,
        image:'<img src=image3.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$560 000",
        specifications:{
            bedroooms: 1,
            bathrooms: 1,
            size:"1540 Sq ft"
        },
    },
    {
        id:4,
        image:'<img src=image4.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$600 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 2,
            garage: 1,
            size:"1700 Sq ft"
        },
    },
    {
        id:5,
        image:'<img src=image5.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$680 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 1,
            garage: 1,
            size:"1700 Sq ft"
        },
    },
    {
        id:6,
        image:'<img src=image6.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$700 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 2,
            garage: 2,
            size:"1800 Sq ft"
        },
    },
    {
        id:7,
        image:'<img src=image7.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$580 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 1,
            garage: 1,
            size:"1500 Sq ft"
        },
    }, 
    {
        id:8,
        image:'<img src=image8.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$830 000",
        specifications:{
            bedroooms: 3,
            bathrooms: 2,
            garage: 2,
            size:"2200 Sq ft"
        },
    },
    {
        id:9,
        image:'<img src=image9.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$790 000",
        specifications:{
            bedroooms: 3,
            bathrooms: 2,
            garage: 1,
            size:"2500 Sq ft"
        },
    },
    {
        id:10,
        image:'<img src=image10.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$785 000",
        specifications:{
            bedroooms: 2,
            bathrooms: 1,
            garage: 1,
            size:"1950 Sq ft"
        },
    },
    {
        id:11,
        image:'<img src=image11.jpg>',
        title: "Apartment",
        location: "Cape Town",
        price: "$670 000",
        specifications:{
            bedroooms: 1,
            bathrooms: 1,
            garage: 1,
            size:"1700 Sq ft"
        },
    }
]