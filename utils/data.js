//const fixPath = arr => arr.map(group => group.images.map(i => i.image_url.slice(7)))
const fixPath = (arr) =>
  arr.forEach((group) =>
    group.images.forEach((img) => (img.image_url = img.image_url.slice(7)))
  );

const myArray = [
  {
    //first 4 personalities you see when taking quiz. the first question
    //American
    group: 1,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/American_chickenandwaffles.jpg",
        pers_url: "public/personality-images/tightrope.jpeg",
        //describes image
        alt: "Chicken and Waffles ",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/American_hamburger.jpeg",
        alt: "Hamburger",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/American_smores.jpg",
        alt: "S'more",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/American_hotwings.jpg",
        alt: "Hot Wings",
      },
    ],
  },
  {
    //Russian
    group: 2,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Russian-beef-stroganoff.jpg",
        //describes image
        alt: "Beef Stroganoff",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Russian-Borscht.jpg",
        alt: "Borscht",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Russian_blini.jpg",
        alt: "Blini",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Russian-soup.jpg",
        alt: "Spicy Soup",
      },
    ],
  },
  {
    //Japan
    group: 3,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Japan_sushi.jpg",
        //describes image
        alt: "Sushi",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Japan_ramen.jpg",
        alt: "Ramen",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Japan_mochi.jpeg",
        alt: "Mochi",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Japan_chickenkatsu.jpg",
        alt: "Chicken Katsu",
      },
    ],
  },
  {
    //Italian
    group: 4,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Italian_lasagna.jpeg",
        //describes image
        alt: "Lasagna",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Italian_chickenandpolenta.jpeg",
        alt: "Chicken and Polenta",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Italian_tiramisu.jpeg",
        alt: "Tiramisu",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Italian_penne_all.jpeg",
        alt: "Penne all'arrabbiata ",
      },
    ],
  },
  {
    //Thailand
    group: 5,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Thailand_padthai.jpeg",
        //describes image
        alt: "Pad Thai",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Thailand_kai_yang.jpeg",
        alt: "Grilled Chicken, Kai Yang",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Thailand_mooncake.jpeg",
        alt: "Mooncake",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Thailand_green_curry.jpeg",
        alt: "Thai Green Curry",
      },
    ],
  },
  {
    //Morrocan
    group: 6,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Moroccan_Pastilla.jpeg",
        //describes image
        alt: "Pastilla",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Morrocan_couscous.jpeg",
        alt: "Couscous",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Morrocan_chebakia.jpeg",
        alt: "Chebakia",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Morrocan_Taktouka.jpeg",
        alt: "Taktouka",
      },
    ],
  },
  {
    //Poland
    group: 7,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Poland-blood-sausage.jpeg",
        //describes image
        alt: "Blood Sausage",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Poland-Pierogi.jpeg",
        alt: "Pierogi",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Poland-babka.jpeg",
        alt: "Babka",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Poland-spicypolish.jpeg",
        alt: "Spicy Polish peppers and meat",
      },
    ],
  },
  {
    //Israeli
    group: 8,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Israeli-Shawarma.jpg",
        //describes image
        alt: "Shawarma",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Israeli-Hummus.jpg",
        alt: "Hummus",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Israeli-Rugelach.jpg",
        alt: "Rugelach",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Israeli-Shakshouka.jpg",
        alt: "Shakshouka",
      },
    ],
  },
  {
    //Indian
    group: 9,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/India-tandoori-chicken.jpeg",
        //describes image
        alt: "Tandoori Chicken",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/India-dal.jpg",
        alt: "Dal",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/India-Jalebi.jpeg",
        alt: "Jalebi",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/India-ButterChicken.jpeg",
        alt: "Butter Chicken",
      },
    ],
  },
  {
    //Australia
    group: 10,
    images: [
      {
        // for the Personality
        persId: "adventurer",
        persId2: 1,
        //URL for choice. Do path from folder
        image_url: "public/images/Australia-vegemitetoast.jpeg",
        //describes image
        alt: "Vegmite Toast",
      },
      {
        persId: "homebody",
        persId2: 2,
        image_url: "public/images/Australia-avotoast.jpg",
        alt: "Avocado Toast",
      },
      {
        persId: "sweet",
        persId2: 3,
        image_url: "public/images/Australia-hot-jam-donuts.jpeg",
        alt: "Hot Jam Donuts",
      },
      {
        persId: "spicy",
        persId2: 4,
        image_url: "public/images/Australia-green-curry-chicken-pie.jpeg",
        alt: "Green Curry Chicken Pie",
      },
    ],
  },
];
fixPath(myArray);
// console.log(myArray[0])

module.exports = myArray;