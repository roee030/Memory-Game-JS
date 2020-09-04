// VARS

const start_btn = document.querySelector('input[type="submit"]');

// FUNCTIONS
function get_difficult() {
  const level1 = document.querySelector('input[id="level1"]');
  const level2 = document.querySelector('input[id="level2"]');
  const level3 = document.querySelector('input[id="level3"]');
  if (level1.checked == true) {
    console.log("222");
  }
  if (level2.checked == true) {
    console.log("222");
  }
  if (level3.checked == true) {
    console.log("222");
  }
}
//EVNETS

start_btn.addEventListener("click", get_difficult);
