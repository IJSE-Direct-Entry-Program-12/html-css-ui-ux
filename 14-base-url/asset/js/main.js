const btnShowHide = document
    .querySelector('button');

btnShowHide.addEventListener('click', () => {
    document.querySelectorAll('img')
        .forEach(img =>
            img.classList.contains('hide') ?
                img.classList.remove('hide') :
                img.classList.add('hide'));
});