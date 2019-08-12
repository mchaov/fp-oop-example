export function renderUI(domID, content) {
    let ui = document.getElementById(domID);
    if (ui) ui.innerHTML = content;
}