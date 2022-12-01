const delta = document.querySelector('#delta');
const postacO = document.querySelector('#postacO');
const postacK = document.querySelector('#postacK');
const postacI = document.querySelector('#postacI');
const miejscaZerowe = document.querySelector('#mZerowe');
const wierzcholek = document.querySelector('#wierzcholek');
const przeciecieOY = document.querySelector('#oy');
const oblButton = document.querySelector(".oblicz");
const wrcButton = document.querySelector(".wrocPrzycisk")

// let wsplA = document.getElementById('wspolczynnikA').value;
// let wsplB = document.getElementById('wspolczynnikB').value;
// let wsplC = document.getElementById('wspolczynnikC').value;


function obliczeniaFunkcji(){
const a = document.getElementById('wspolczynnikA').value;
const b = document.getElementById('wspolczynnikB').value;
const c = document.getElementById('wspolczynnikC').value;

let deltaF = b*b-(4*a*c);
let deltaFP = Math.sqrt(deltaF)

let x1 = (-b - deltaFP )/(2*a);
let x2 = (-b + deltaFP)/(2*a);
let x0 = -b/(2*a);

const p = -b/(2*a)
const q = -deltaF/(4*a)


    if(a ===''){
        deltaElement = document.createElement('p');
        deltaElement.innerHTML = `Funkja nie jest kwadratowa`;
        deltaElement.classList.add('wynikiObl');
        delta.appendChild(deltaElement);

        const postacOgl = document.createElement('p');
        postacOgl.innerHTML = `f(x) = ${b}x + ${c}`
        postacOgl.classList.add('wynikiObl');
        postacO.appendChild(postacOgl);

        const postacKan = document.createElement('p');
        postacKan.innerHTML = `Funkcja nie ma postaci kanonicznej`
        postacKan.classList.add('wynikiObl');
        postacK.appendChild(postacKan);

        const postacIlo = document.createElement('p');
        postacIlo.innerHTML = `Funkcja nie ma postaci iloczynowej`
        postacIlo.classList.add('wynikiObl');
        postacI.appendChild(postacIlo);

        const oY = document.createElement('p');
        oY.innerHTML = `Funkcja przecina oś OY w punkcie (0, ${c})`
        oY.classList.add('wynikiObl');
        przeciecieOY.appendChild(oY);


    }else if( a !== "" && deltaF>0){

        const deltaElement = document.createElement('p');
        deltaElement.innerHTML = deltaF;
        deltaElement.classList.add('wynikiObl');
        delta.appendChild(deltaElement);

        const postacOgl = document.createElement('p');
        postacOgl.innerHTML = `f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`
        postacOgl.classList.add('wynikiObl');
        postacO.appendChild(postacOgl);

        const wierz = document.createElement('p');
        wierz.innerHTML = `W (${p} , ${q})`
        wierz.classList.add('wynikiObl');
        wierzcholek.appendChild(wierz);

        const postacKan = document.createElement('p');
        postacKan.innerHTML = `f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'} + (${q})`
        postacKan.classList.add('wynikiObl');
        postacK.appendChild(postacKan);

        const postacIlo = document.createElement('p');
        postacIlo.innerHTML = `f(x) = ${a}(x - (${x1}))*(x - (${x2}))`
        postacIlo.classList.add('wynikiObl');
        postacI.appendChild(postacIlo);

        const mZerowe = document.createElement('p');
        mZerowe.innerHTML = `Funkcja ma dwa miejsca zerowe: x1=(${x1}) , x2=(${x2})`
        mZerowe.classList.add('wynikiObl');
        miejscaZerowe.appendChild(mZerowe);

        const oY = document.createElement('p');
        oY.innerHTML = `Funkcja przecina oś OY w punkcie (0, ${c})`
        oY.classList.add('wynikiObl');
        przeciecieOY.appendChild(oY);

    }else if( a!= "" && deltaF==0){
        const postacIlo = document.createElement('p');
        postacIlo.innerHTML = `f(x) = ${a}(x - (${x0})${'<sup>2</sup>'})`
        postacIlo.classList.add('wynikiObl');
        postacI.appendChild(postacIlo); 

        const mZerowe = document.createElement('p');
        mZerowe.innerHTML = `Funkcja ma jedno miejsce zerowe: x0=(${x0})`
        mZerowe.classList.add('wynikiObl');
        miejscaZerowe.appendChild(mZerowe);

        const oY = document.createElement('p');
        oY.innerHTML = `Funkcja przecina oś OY w punkcie (0, ${c})`
        oY.classList.add('wynikiObl');
        przeciecieOY.appendChild(oY);

        const postacKan = document.createElement('p');
        postacKan.innerHTML = `f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'}`
        postacKan.classList.add('wynikiObl');
        postacK.appendChild(postacKan);

        const wierz = document.createElement('p');
        wierz.innerHTML = `W (${p} , ${q})`
        wierz.classList.add('wynikiObl');
        wierzcholek.appendChild(wierz);

        const deltaElement = document.createElement('p');
        deltaElement.innerHTML = deltaF;
        deltaElement.classList.add('wynikiObl');
        delta.appendChild(deltaElement);

        const postacOgl = document.createElement('p');
        postacOgl.innerHTML = `f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`
        postacOgl.classList.add('wynikiObl');
        postacO.appendChild(postacOgl);

    }else if( a!= "" && deltaF<0){
        const deltaElement = document.createElement('p');
        deltaElement.innerHTML = deltaF;
        deltaElement.classList.add('wynikiObl');
        delta.appendChild(deltaElement);

        const postacOgl = document.createElement('p');
        postacOgl.innerHTML = `f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`
        postacOgl.classList.add('wynikiObl');
        postacO.appendChild(postacOgl);

        const wierz = document.createElement('p');
        wierz.innerHTML = `W (${p} , ${q})`
        wierz.classList.add('wynikiObl');
        wierzcholek.appendChild(wierz);

        const postacKan = document.createElement('p');
        postacKan.innerHTML = `f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'} + (${q})`
        postacKan.classList.add('wynikiObl');
        postacK.appendChild(postacKan);

        const postacIlo = document.createElement('p');
        postacIlo.innerHTML = `Funkcja nie ma postaci iloczynowej`
        postacIlo.classList.add('wynikiObl');
        postacI.appendChild(postacIlo);

        const mZerowe = document.createElement('p');
        mZerowe.innerHTML = `Funkcja nie ma miejsc zerowych`
        mZerowe.classList.add('wynikiObl');
        miejscaZerowe.appendChild(mZerowe);

        const oY = document.createElement('p');
        oY.innerHTML = `Funkcja przecina oś OY w punkcie (0, ${c})`
        oY.classList.add('wynikiObl');
        przeciecieOY.appendChild(oY);
    };
};





function obrot(){
    document.querySelector('.funkcjaK').style.transform = 'rotateY(-180deg)';
    document.querySelector('.wyniki').style.transform = 'rotateY(0deg)';
};
function obrot1(){
    location.reload();

};

oblButton.addEventListener('click', obliczeniaFunkcji);
oblButton.addEventListener('click',obrot);
wrcButton.addEventListener('click',obrot1);


