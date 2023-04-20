(function () {

    let init = function () {

        let q = (s) => document.querySelector(s);

        let sliders = document.querySelectorAll('.slider');
        sliders.forEach(function (root, index) {
            // let root = q('.slider');
            if (!root) return;
            let pos = 0;
            let holder = document.createElement('div');
            holder.className = 'slider_items';
            root.append(holder);
            let items = root.querySelectorAll('.slide');
            holder.append(...items);

            // calc width
            let rootWidth = root.getBoundingClientRect().width;
            root.style.setProperty('--w', rootWidth);
            root.style.setProperty('--l', items.length);

            let btn_left = root.querySelector('.slider_prev');
            let btn_right = root.querySelector('.slider_next');

            btn_right.addEventListener('click', function (e) {
                pos = (pos + 1 == items.length) ? 0 : pos + 1;
                root.style.setProperty('--pos', pos);
            });
            btn_left.addEventListener('click', function (e) {
                pos = (pos == 0) ? items.length - 1 : pos - 1;
                root.style.setProperty('--pos', pos);
            })

            root.classList.add('init');
        })

    }

    // document.addEventListener('DOMContentLoaded', init)

})()

let slider;

function DfSlider(rootClass) {
    // let root = 
    this.root = document.querySelector(rootClass);
    if (!this.root) return;
    this.items = this.root.querySelectorAll('.slide');
    if (!this.items) return;

    this.pos = 0;
    this.holder = document.createElement('div');
    this.holder.className = 'slider_items';
    this.root.append(this.holder);
    this.holder.append(...this.items);

    // calc width
    let rootWidth = this.root.getBoundingClientRect().width;
    this.root.style.setProperty('--w', rootWidth);
    this.root.style.setProperty('--l', this.items.length);

    this.next = function () {
        console.log('next')
        let pos = (this.pos + 1 == this.items.length) ? 0 : this.pos + 1;
        this.setPosition(pos);
    }

    this.prev = function () {
        console.log('prev')
        let pos = (this.pos == 0) ? this.items.length - 1 : this.pos - 1;
        this.setPosition(pos);
    }

    // bind buttons
    let btn_left = this.root.querySelector('.slider_prev');
    let btn_right = this.root.querySelector('.slider_next');

    // console.log(btn_left, btn_right)
    if (btn_left) {
        btn_left.addEventListener('click', this.prev.bind(this));
    }
    if (btn_right) {
        btn_right.addEventListener('click', this.next.bind(this));
    }




    this.root.classList.add('init');


    this.setPosition = function (p) {
        this.pos = p;
        this.root.style.setProperty('--pos', this.pos);
    }

}

document.addEventListener('DOMContentLoaded', function () {
    slider = new DfSlider('.slider1');
    new DfSlider('.slider2');
})