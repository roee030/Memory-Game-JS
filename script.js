// VARS
state = {
  level: "easy",
  cardId1: "",
  cardId2: "",
  cards: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg`,
      id: 1,
      name: "חתול בריטי קצר-שיער",
    },
    {
      src: `https://zoolu.co.il/pub/media/mageplaza/blog/post/p/e/persiancatfood.jpg`,
      id: 2,
      name: "חתול פרסי",
    },
    {
      src: `https://cdn.babamail.co.il/Images/2014/12/24/53e7c15a-10cb-4125-8307-2d3b0a6e7834.jpg`,
      id: 3,
      name: "חתול רוסי כחול",
    },
    {
      src: `https://www.petfinder.co.il/wp-content/uploads/2019/04/c2-488x514.png`,
      id: 4,
      name: "מיין קון",
    },
    {
      src: `https://farm1.static.flickr.com/168/428032984_0b566c91e0.jpg`,
      id: 5,
      name: "חתול סיאמי",
    },
    {
      src: `https://cdn.royalcanin-weshare-online.io/nGlqHGsBG95Xk-RB0vhc/v1/bc21bl-hub-british-longhair-adult-sitting`,
      id: 6,
      name: "חתול אמריקני קצר-שיער",
    },
    {
      src: `https://www.purina.co.il/sites/site.prod1.purina.co.il/files/styles/slider_mobile/public/2019-11/Ragdoll-Cat_526X360.jpg?itok=boZr7_8F`,
      id: 7,
      name: "רגדול",
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg`,
      id: 8,
      name: "חתול ספינקס",
    },
    {
      src: `https://www.israelhayom.co.il/sites/default/files/u1479/1_2.JPG`,
      id: 9,
      name: "חתול בנגלי",
    },
    {
      src: `https://www.purina.co.il/sites/site.prod1.purina.co.il/files/styles/slider_mobile/public/2019-11/Ocicat_526X360.jpg?itok=jhuH657A`,
      id: 10,
      name: "חתול אביסיני",
    },
    {
      src: `https://uploads.homeless.co.il/getImage.ashx?type=pets&fs=201902&fn=nvFile3629681.jpg`,
      id: 11,
      name: "אקזוטי קצר שיער",
    },
    {
      src: `https://lh3.googleusercontent.com/proxy/7qEcqSV2mmy8gl68U5_AHYjuFLncvosc9Z2Gjr1gMlywhgQhFX6iTMSehTJtlQTAHXXykWwNYElCAzS2eKhygiP0kKyemMJA1O-JWwlKJBrtRgNksYe7hXDXXblMPD3CWBQum2IomF5Q-2A9`,
      id: 12,
      name: "בירמן",
    },
  ],
};
const arrtoshuffle = [1, 2, 3, 4, 5, 6];
const start_btn = document.querySelector('input[type="submit"]');
const game_wraper = document.querySelector(".game-wraper");
// FUNCTIONS
function get_difficult() {
  const level1 = document.querySelector('input[id="level1"]');
  const level2 = document.querySelector('input[id="level2"]');
  const level3 = document.querySelector('input[id="level3"]');
  if (level1.checked == true) {
    state.level = "easy";
    create_game(6);
  }
  if (level2.checked == true) {
    console.log("222");
  }
  if (level3.checked == true) {
    console.log("222");
  }
}
function create_game(card_number) {
  display_cards(card_number);
}
function display_cards(card_number) {
  let arr = shuffle(arrtoshuffle);
  for (let index = 1; index <= card_number; index++) {
    const card = document.createElement("div");
    console.log(arr[index - 1]);
    card.classList.add(state.cards[arr[index - 1]].id);
    card.classList.add("card");
    const card_img = document.createElement("img");
    card_img.src = state.cards[arr[index - 1]].src;
    card.insertAdjacentElement("afterbegin", card_img);
    game_wraper.insertAdjacentElement("afterbegin", card);
  }
  arr = shuffle(arrtoshuffle);
  for (let index = 1; index <= card_number; index++) {
    const card = document.createElement("div");
    console.log(arr[index - 1]);
    card.classList.add(state.cards[arr[index - 1]].id);
    card.classList.add("card");
    const card_img = document.createElement("img");
    card_img.src = state.cards[arr[index - 1]].src;
    card.insertAdjacentElement("afterbegin", card_img);
    game_wraper.insertAdjacentElement("afterbegin", card);
  }
}
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

//EVNETS

start_btn.addEventListener("click", get_difficult);
