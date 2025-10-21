const dialog = document.querySelector('#dialog');
const close_btn = document.querySelector('#close_dialog');
const show_btn = document.querySelector('#show_dialog');

show_btn.addEventListener('click', () => {
    dialog.showModal();
});
close_btn.addEventListener('click', () => {
    dialog.close();
});
