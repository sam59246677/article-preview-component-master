const toggleIocn = document.querySelector('.toggle-share-dialog-icon');
const shareIconsDialog = document.querySelector('.share-icons-dialog');
const hideIcon = document.querySelector('.hide-share-dialog-icon');

toggleIocn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active-dialog');
    shareIconsDialog.classList.toggle('show-share-dialog');
});

hideIcon.addEventListener('click', () => {
    toggleIocn.classList.toggle('active-dialog');
    shareIconsDialog.classList.toggle('show-share-dialog');
});