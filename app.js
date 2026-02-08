// Shared storage helpers
const KEY = "dinnerInvite";

function saveData(partial){
  const old = JSON.parse(localStorage.getItem(KEY) || "{}");
  const merged = { ...old, ...partial, updated_at: new Date().toLocaleString() };
  localStorage.setItem(KEY, JSON.stringify(merged));
  return merged;
}

function getData(){
  return JSON.parse(localStorage.getItem(KEY) || "{}");
}

function clearData(){
  localStorage.removeItem(KEY);
}

// Utility: select cards
function makeSelectable(containerSelector, itemSelector, chosenClass, onPick){
  const container = document.querySelector(containerSelector);
  if(!container) return;

  container.addEventListener("click", (e) => {
    const card = e.target.closest(itemSelector);
    if(!card) return;

    container.querySelectorAll(itemSelector).forEach(x => x.classList.remove(chosenClass));
    card.classList.add(chosenClass);

    onPick(card);
  });
}
