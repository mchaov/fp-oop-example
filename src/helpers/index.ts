export function renderUI(domID: string, content: string) {
    let ui = document.getElementById(domID);
    if (ui) ui.innerHTML = content;
}