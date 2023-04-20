document.addEventListener('DOMContentLoaded', function () {

    let counters = document.querySelectorAll('.couner');
    counters.forEach(function (el) {
        let changeEvent = new Event('change');
        let inp = el.querySelector('.counter_value');
        let btns = el.querySelectorAll('.counter_plus');
        let btnHandler = function (e) {
            let val = +inp.value;
            let delta = +e.target.dataset.delta;
            console.log(val, e.target.dataset, delta);
            val += delta;
            if (inp.min !== undefined && val < inp.min) return;
            if (inp.max !== undefined && val > inp.max) return;
            inp.value = val;
            inp.dispatchEvent(changeEvent);
        }
        for (let btn of btns) {
            btn.addEventListener('click', btnHandler);
        }
    });
    // console.log(counters);
    calcSum();
    document.querySelectorAll('.cart .counter_value')
        .forEach(el => el.addEventListener('change', calcSum))

});

function calcSum() {
    let table = document.querySelector('.cart');
    let inputs = table.querySelectorAll('.counter_value');
    let arInputs = Array.from(inputs);

    arInputs.forEach(function (inp) {
        let cnt = +inp.value;
        let price = +inp.dataset.price;
        let sum = price * cnt;
        let sumElement = inp.closest('tr').querySelector('.sum');
        sumElement.innerText = sum;
        console.log(sum, sumElement)
    });
    console.log(arInputs)
    let sums = arInputs.map(el => el.value * el.dataset.price);
    let sumAll = sums.reduce((a, b) => a + b, 0);
    let sumElement = table.querySelector('tfoot .sum');
    sumElement.innerText = sumAll;
    console.log(sums)

}