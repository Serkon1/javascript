document.addEventListener('DOMContentLoaded', function () {
    console.log('я родился!');
    let block = document.querySelector('.myblock');
    block.style.border = "2mm solid black";
    block.classList.add('centered');
    // block.nextSibling.classList.add('centered');
    block.nextElementSibling.classList.add('centered');
    // block.style.display = 'none';
    // console.log(block);
    // block.innerHTML = '<a href="http://ya.ru">ЫЫЫ</a>';
    let block2 = document.getElementById('block2');
    let block3 = document.querySelector('#block2');
    block2.style.borderRadius = '50%';

    // block2.innerHTML = '<b>Здесь был вася</b>';
    // console.log(block2);
    // console.log(block.innerText);

    let blocks = document.querySelectorAll('.myblock');
    for (let i in blocks) {
        // blocks[i].innerText = i;
        // b = "a";
    }
    console.log(blocks);

    let block2_copy = block2.cloneNode();
    let block2_another_copy = block2.cloneNode(true);
    block2_another_copy.innerText = "ac";
    block.append(block2_copy);
    document.body.prepend(block2_another_copy);

    let showHide = document.querySelector('.showNext');
    showHide.addEventListener('click', function (e) {
        this.nextElementSibling.classList.toggle('hidden');
    });

    let links = document.querySelectorAll('a[href^=http]');
    console.log(links);
    for (let link of links) {
        // let link = links[i];
        // let path = link.getAttribute('href');
        // if (path.startsWith('http')) {
        //     console.log(path, 'is external');
        link.target = '_blank';
        // }
        // console.log(path);
    }


    let inp0 = document.querySelector('#input0');
    inp0.value = "Это - значение поля";
    inp0.addEventListener('focusin', function () {
        // console.log('focusin', this);
        this.classList.add('input_active');
    });
    inp0.addEventListener('focusout', function () {
        console.log('focusout', this);
        this.classList.remove('input_active');
    });
    inp0.onkeyup = function () {
        console.log('keyup');
        document.querySelector('#inp0val').innerText =
            this.value;
    }

});