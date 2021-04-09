const express = require("express");
const app = express();
const path = require("path");
const exphbs = require('express-handlebars');

// const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 7500;

//Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    res.render("homepage",{data: myArray})
})




app.listen(PORT, () => console.log("App listening on port " + PORT));

//const fixPath = arr => arr.map(group => group.images.map(i => i.image_url.slice(7)))
const fixPath = arr => arr.forEach(group => group.images.forEach(img => img.image_url = img.image_url.slice(7)))

const myArray = [
    {
    //first 4 personalities you see when taking quiz. the first question
    //American
    group: 1,
    images: [
        {
        // for the Personality
        persId: "adventurer",
        //URL for choice. Do path from folder
        image_url: "public/images/American_chickenandwaffles.jpg",
        //describes image
        alt: "Chicken and Waffles "
        },
        {
        persId: "homebody",
        image_url: "public/images/American_hamburger.jpeg",
        alt: "Hamburger"
        },
        {
        persId: "sweet",
        image_url: "public/images/American_smores.jpg",
        alt: "S'more"
        },
        {
        persId: "spicy",
        image_url: "public/images/American_hotwings.jpg",
        alt: "Hot Wings"
        },
    ]
    },
    {
        //Russian
        group: 2,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Russian-beef-stroganoff.jpg",
            //describes image
            alt: "Beef Stroganoff"
            },
            {
            persId: "homebody",
            image_url: "public/images/Russian-Borscht.jpg",
            alt: "Borscht"
            },
            {
            persId: "sweet",
            image_url: "public/images/Russian_blini.jpg",
            alt: "Blini"
            },
            {
            persId: "spicy",
            image_url: "public/images/Russian-soup.jpg",
            alt: "Spicy Soup"
            },
        ]
    },
    {   
        //Japan
        group: 3,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Japan_sushi.jpg",
            //describes image
            alt: "Sushi"
            },
            {
            persId: "homebody",
            image_url: "public/images/Japan_ramen.jpg",
            alt: "Ramen"
            },
            {
            persId: "sweet",
            image_url: "public/images/Japan_mochi.jpeg",
            alt: "Mochi"
            },
            {
            persId: "spicy",
            image_url: "public/images/Japan_chickenkatsu.jpg",
            alt: "Chicken Katsu"
            },
        ]
    },
    {
        //Italian
        group: 4,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Italian_lasagna.jpeg",
            //describes image
            alt: "Lasagna"
            },
            {
            persId: "homebody",
            image_url: "public/images/Italian_chickenandpolenta.jpeg",
            alt: "Chicken and Polenta"
            },
            {
            persId: "sweet",
            image_url: "public/images/Italian_tiramisu.jpeg",
            alt: "Tiramisu"
            },
            {
            persId: "spicy",
            image_url: "public/images/Italian_penne_all.jpeg",
            alt: "Penne all'arrabbiata "
            },
        ]
    },
    {   
        //Thailand
        group: 5,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Thailand_padthai.jpeg",
            //describes image
            alt: "Pad Thai"
            },
            {
            persId: "homebody",
            image_url: "public/images/Thailand_kai_yang.jpeg",
            alt: "Grilled Chicken, Kai Yang"
            },
            {
            persId: "sweet",
            image_url: "public/images/Thailand_mooncake.jpeg",
            alt: "Mooncake"
            },
            {
            persId: "spicy",
            image_url: "public/images/Thailand_green_curry.jpeg",
            alt: "Thai Green Curry"
            },
        ]
    },
    {   
        //Morrocan
        group: 6,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Moroccan_Pastilla.jpeg",
            //describes image
            alt: "Pastilla"
            },
            {
            persId: "homebody",
            image_url: "public/images/Morrocan_couscous.jpeg",
            alt: "Couscous"
            },
            {
            persId: "sweet",
            image_url: "public/images/Morrocan_chebakia.jpeg",
            alt: "Chebakia"
            },
            {
            persId: "spicy",
            image_url: "public/images/Morrocan_Taktouka.jpeg",
            alt: "Taktouka"
            },
        ]
    },
    {   
        //Poland
        group: 7,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Poland-blood-sausage.jpeg",
            //describes image
            alt: "Blood Sausage"
            },
            {
            persId: "homebody",
            image_url: "public/images/Poland-Pierogi.jpeg",
            alt: "Pierogi"
            },
            {
            persId: "sweet",
            image_url: "public/images/Poland-babka.jpeg",
            alt: "Babka"
            },
            {
            persId: "spicy",
            image_url: "public/images/Poland-spicypolish.jpeg",
            alt: "Spicy Polish peppers and meat"
            },
        ]
    },
    {   
        //Israeli
        group: 8,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Israeli-Shawarma.jpg",
            //describes image
            alt: "Shawarma"
            },
            {
            persId: "homebody",
            image_url: "public/images/Israeli-Hummus.jpg",
            alt: "Hummus"
            },
            {
            persId: "sweet",
            image_url: "public/images/Israeli-Rugelach.jpg",
            alt: "Rugelach"
            },
            {
            persId: "spicy",
            image_url: "public/images/Israeli-Shakshouka.jpg",
            alt: "Shakshouka"
            },
        ]
    },
    {   
        //Indian
        group: 9,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/India-tandoori-chicken.jpeg",
            //describes image
            alt: "Tandoori Chicken"
            },
            {
            persId: "homebody",
            image_url: "public/images/India-dal.jpg",
            alt: "Dal"
            },
            {
            persId: "sweet",
            image_url: "public/images/India-Jalebi.jpeg",
            alt: "Jalebi"
            },
            {
            persId: "spicy",
            image_url: "public/images/India-ButterChicken.jpeg",
            alt: "Butter Chicken"
            },
        ]
    },
    {   
        //Australia
        group: 10,
        images: [
            {
            // for the Personality
            persId: "adventurer",
            //URL for choice. Do path from folder
            image_url: "public/images/Australia-vegemitetoast.jpeg",
            //describes image
            alt: "Vegmite Toast"
            },
            {
            persId: "homebody",
            image_url: "public/images/Australia-avotoast.jpg",
            alt: "Avocado Toast"
            },
            {
            persId: "sweet",
            image_url: "public/images/Australia-hot-jam-donuts.jpeg",
            alt: "Hot Jam Donuts"
            },
            {
            persId: "spicy",
            image_url: "public/images/Australia-green-curry-chicken-pie.jpeg",
            alt: "Green Curry Chicken Pie"
            },
        ]
    },
];
fixPath(myArray)
// console.log(myArray[0])