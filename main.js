const wyniki = document.querySelector('.wyniki')
const delta = document.querySelector('#delta');
const postacO = document.querySelector('#postacO');
const postacK = document.querySelector('#postacK');
const postacI = document.querySelector('#postacI');
const miejscaZerowe = document.querySelector('#mZerowe');
const wierzcholek = document.querySelector('#wierzcholek');
const przeciecieOY = document.querySelector('#oy');
const oblButton = document.querySelector(".oblicz");
const wrcButton = document.querySelector(".wrocPrzycisk")

const wsplA = document.getElementById('wspolczynnikA');
const wsplB = document.getElementById('wspolczynnikB');
const wsplC = document.getElementById('wspolczynnikC');


function obliczeniaFunkcji(){
const a = wsplA.value;
const b = wsplB.value;
const c = wsplC.value;


let deltaF = b*b-(4*a*c);
let deltaFP = Math.sqrt(deltaF);

let x1 = (-b - deltaFP )/(2*a);
let x2 = (-b + deltaFP)/(2*a);
let x0 = -b/(2*a);

const p = -b/(2*a);
const q = -deltaF/(4*a);


    if(a =='' || a==0){
        dodajPole(`Postać ogólna funkcji`,`f(x) = ${b}x + ${c}`,postacO);

        dodajPole(`Miejsce przecięcia osi OX`,`Funkcja przecina oś OX w punkcie (${(-c)/(b)},0)`,miejscaZerowe)

        dodajPole(`Miejsce przecięcia osi OY`,`Funkcja przecina oś OY w punkcie (0, ${c})`,przeciecieOY);

    }else if( a != 0 && deltaF>0){
        dodajPole(`Postać ogólna funkcji`,`f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`,postacO);

        dodajPole(`Postać kanoniczna funkcji`,`f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'} + (${q})`,postacK);

        dodajPole(`Postać iloczynowa funkcji`,`f(x) = ${a}(x - (${x1}))*(x - (${x2}))`,postacI);

        dodajPole(`Delta`,deltaF,delta);

        dodajPole(`Miejsca zerowe funkcji`,`Funkcja ma dwa miejsca zerowe: x1=(${x1}) , x2=(${x2})`,miejscaZerowe);

        dodajPole(`Wierzchołek funkcji`,`W (${p} , ${q})`,wierzcholek);

        dodajPole(`Miejsce przecięcia z osią OY`,`Funkcja przecina oś OY w punkcie (0, ${c})`,przeciecieOY);

    }else if( a!= 0 && deltaF==0){
        dodajPole(`Postać ogólna funkcji`,`f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`,postacO);

        dodajPole(`Postać kanoniczna funkcji`,`f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'}`,postacK);

        dodajPole(`Postać iloczynowa funkcji`,`f(x) = ${a}(x - (${x0})${'<sup>2</sup>'})`,postacI);

        dodajPole(`Delta`,deltaF,delta);

        dodajPole(`Miejsce zerowe funckji`,`Funkcja ma jedno miejsce zerowe: x0=(${x0})`,miejscaZerowe);

        dodajPole(`Wierzchołek funkcji`,`W (${p} , ${q})`,wierzcholek);

        dodajPole(`Miejsce przecięcia z osią OY`,`Funkcja przecina oś OY w punkcie (0, ${c})`,przeciecieOY);

    }else if( a!= 0 && deltaF<0){
        dodajPole(`Postać ogólna funkcji`,`f(x) = ${a}x ${'<sup>2</sup>'} + ${b}x + ${c}`,postacO);
 
        dodajPole(`Postać kanoniczna funkcji`,`f(x) = ${a}(x - (${p}) )${'<sup>2</sup>'} + (${q})`,postacK);

        dodajPole(`Delta`,deltaF,delta);

        dodajPole(`Wierzchołek funkcji`,`W (${p} , ${q})`,wierzcholek);

        dodajPole(`Miejsce przecięcia z osią OY`,`Funkcja przecina oś OY w punkcie (0, ${c})`,przeciecieOY);
    };
};

function obrot(){
    if(!isNaN(wsplA.value) && !isNaN(wsplB.value) && !isNaN(wsplC.value)){
        document.querySelector('.funkcjaK').style.transform = 'rotateY(-180deg)';
        document.querySelector('.wyniki').style.transform = 'rotateY(0deg)';
    }else{
        return;
    };

};


function dodajPole(Naglowek,Tresc,Pole){
    const Ngl = document.createElement('p');
    const El = document.createElement('p');
    Ngl.innerHTML = Naglowek;
    El.innerHTML = Tresc;
    Ngl.classList.add('wynikiNaglowek');
    El.classList.add('wynikiObl');
    Pole.appendChild(Ngl);
    Pole.appendChild(El);
};


function wroc(){
    document.querySelector('.funkcjaK').style.transform = 'rotateY(0deg)';
    document.querySelector('.wyniki').style.transform = 'rotateY(180deg)';

    usun()

};

function usun(){
    postacO.removeChild(document.querySelector('.wynikiNaglowek'));
    postacO.removeChild(document.querySelector('.wynikiObl'));

    postacK.removeChild(document.querySelector('.wynikiNaglowek'));
    postacK.removeChild(document.querySelector('.wynikiObl'));

    postacI.removeChild(document.querySelector('.wynikiNaglowek'));
    postacI.removeChild(document.querySelector('.wynikiObl'));

    delta.removeChild(document.querySelector('.wynikiNaglowek'));
    delta.removeChild(document.querySelector('.wynikiObl'));

    miejscaZerowe.removeChild(document.querySelector('.wynikiNaglowek'));
    miejscaZerowe.removeChild(document.querySelector('.wynikiObl'));

    wierzcholek.removeChild(document.querySelector('.wynikiNaglowek'));
    wierzcholek.removeChild(document.querySelector('.wynikiObl'));

    przeciecieOY.removeChild(document.querySelector('.wynikiNaglowek'));
    przeciecieOY.removeChild(document.querySelector('.wynikiObl'));
    
}

oblButton.addEventListener('click', obliczeniaFunkcji);
oblButton.addEventListener('click',obrot);
wrcButton.addEventListener('click',wroc);
