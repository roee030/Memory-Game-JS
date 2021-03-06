// VARS
state = {
  level: "easy",
  card1: "",
  card2: "",
  cardId1: "",
  cardId2: "",
  card1_div: "",
  card2_div: "",
  cards: [
    {
      src: `https://lh3.googleusercontent.com/proxy/7qEcqSV2mmy8gl68U5_AHYjuFLncvosc9Z2Gjr1gMlywhgQhFX6iTMSehTJtlQTAHXXykWwNYElCAzS2eKhygiP0kKyemMJA1O-JWwlKJBrtRgNksYe7hXDXXblMPD3CWBQum2IomF5Q-2A9`,
      id: 0,
      name: "בירמן",
    },
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
    ,
  ],
  num_of_card: 0,
};
const arrtoshuffle = [1, 2, 3, 4, 5, 6];
const arrtoshuffle1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrtoshuffle2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const you_win = document.querySelector(".you-win");
const start_btn = document.querySelector('input[type="submit"]');
const game_wraper = document.querySelector(".game-wraper");
const new_game_btn = document.querySelector(".new_game");
const welcome_popup = document.querySelector(".welcome-popup");
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
    state.level = "medium";
    create_game(9);
  }
  if (level3.checked == true) {
    state.level = "hard";
    create_game(12);
  }
}
function create_game(card_number) {
  state.num_of_card = card_number;
  display_cards(card_number);
  new_game_btn.style.display = "flex";
  welcome_popup.style.display = "none";
}
function display_cards(card_number) {
  let iterator = 1;
  let arr;
  if (card_number == 6) {
    arr = shuffle(arrtoshuffle);
  }
  if (card_number == 9) {
    arr = shuffle(arrtoshuffle1);
  }
  if (card_number == 12) {
    arr = shuffle(arrtoshuffle1);
  }
  for (let index = 1; index <= card_number; index++) {
    const card = document.createElement("div");
    console.log(arr[index - 1]);
    card.classList.add(state.cards[arr[index - 1]].id);
    card.classList.add("card", "id" + iterator);
    iterator++;
    console.log(card);

    const card_img = document.createElement("img");
    card_img.src = state.cards[arr[index - 1]].src;
    card.insertAdjacentElement("afterbegin", card_img);
    game_wraper.insertAdjacentElement("afterbegin", card);
    card.addEventListener("click", card_on_click);
  }
  if (card_number == 6) {
    arr = shuffle(arrtoshuffle);
  }
  if (card_number == 9) {
    arr = shuffle(arrtoshuffle1);
  }
  if (card_number == 12) {
    arr = shuffle(arrtoshuffle1);
  }
  for (let index = 1; index <= card_number; index++) {
    const card = document.createElement("div");
    console.log(arr[index - 1]);
    card.classList.add(state.cards[arr[index - 1]].id);
    card.classList.add("card", "id" + iterator);
    iterator++;
    console.log(card);
    const card_img = document.createElement("img");
    card_img.src = state.cards[arr[index - 1]].src;
    card.insertAdjacentElement("afterbegin", card_img);
    game_wraper.insertAdjacentElement("afterbegin", card);
    card.addEventListener("click", card_on_click);
  }
}
function card_on_click() {
  let first_card = "";
  let second_card = "";
  if (this.classList[3]) {
    console.log("check!!!!!");
    return;
  }
  if (!state.cardId1) {
    state.card1 = this.classList[0];
    state.cardId1 = this.classList[2];
    state.card1_div = this;
    console.log(first_card);
    const card_src1 = return_img_src(state.card1)[0].src;
    console.log(first_card);
    this.style.content = `url(${card_src1})`;
  } else if (state.cardId1 === this.classList[2]) {
    console.log("the same card! choose something else");
    return;
  } else if (!state.cardId2) {
    state.cardId2 = this.classList[2];
    state.card2 = this.classList[0];
    state.card2_div = this;
    console.log(second_card);
    const card_src2 = return_img_src(state.card2)[0].src;
    this.style.content = `url(${card_src2})`;
    if (state.card2 && state.card1 === state.card2) {
      console.log("BOOM!");
      state.card2_div.classList.add("check");
      state.card1_div.classList.add("check");
      console.log(state.card1_div, state.card2_div);

      state.num_of_card--;
      console.log("state.num_of_card", state.num_of_card);
      if (state.num_of_card == 0) {
        you_win.style.display = "flex";
        console.log("Finish!");
      }
      //   flipCards()
      resetstate();
    } else {
      console.log("Its not the same card");
      setTimeout(() => {
        state.card1_div.style.content = `url(https://janissharesscienceforkids.files.wordpress.com/2014/03/cats-family.gif)`;
        state.card2_div.style.content = `url(https://janissharesscienceforkids.files.wordpress.com/2014/03/cats-family.gif)`;
      }, 1500);
    }
    resetstate();
  }
  console.log(state.card1, state.card2);

  //check_both_cards();
  console.log("card1", state.card1);
  console.log("card2", state.card2);
}
function resetstate() {
  console.log("reset");
  state.card1 = "";
  state.card2 = "";
  state.cardId1 = "";
  state.cardId2 = "";
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
function return_img_src(id) {
  const cat_src = state.cards.filter((e) => e.id == id);
  return cat_src;
}
function new_game() {
  game_wraper.innerHTML = "";
  welcome_popup.style.display = "flex";
}
//EVNETS

start_btn.addEventListener("click", get_difficult);
new_game_btn.addEventListener("click", new_game);

console.log(return_img_src(2)[0].src);
