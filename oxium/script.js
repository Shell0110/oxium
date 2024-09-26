// Variable

let Money = 0;
let TotalMoney = 0;
let Clicks = 0; 
let Multis = 1;
let CPC = 1;

// Clicker

function Clicker() {
    Money += (CPC * Multis);
    TotalMoney += (CPC * Multis);
    Clicks += 1;
    TotalMoney == Money;
    refresh();
}


// fusion

let fusion = 1000;
let fusionAdd = 200;
let fusionHave = 0;

function FunFusion() {
    if(Money >= fusion) {
        Money -= fusion;
        Multis += 1;
        fusion += fusionAdd;
        fusionHave += 1;
        refresh();
    } else {
        const alertDiv = document.getElementById('alertDiv');
        alertDiv.classList.remove('hidden');
        setTimeout(() => {
            alertDiv.classList.add('hidden'); 
        }, 3000);
    } 
}





// electron 

let electron = 5000;
let electronAdd = 500;
let electronHave = 0;

function FunElectron() {
    if(Money >= electron) {
        Money -= electron;
        Multis += 2;
        electron += electronAdd;
        electronHave += 1;
        refresh();
    } else {
        const alertDiv = document.getElementById('alertDiv');
        alertDiv.classList.remove('hidden');
        setTimeout(() => {
            alertDiv.classList.add('hidden'); 
        }, 3000);
    } 
}



// Neutron

let neutron = 15000;
let neutronAdd = 500;
let neutronHave = 0;

function FunNeutron() {
    if(Money >= neutron) {
        Money -= neutron;
        Multis += 5;
        neutron += neutronAdd;
        neutronHave += 1;
        refresh();
    } else {
        const alertDiv = document.getElementById('alertDiv');
        alertDiv.classList.remove('hidden');
        setTimeout(() => {
            alertDiv.classList.add('hidden'); 
        }, 3000);
    } 
}


// protonr

let proton = 25000;
let protonAdd = 1000;
let protonHave = 0;

function FunProton() {
    if(Money >= proton) {
        Money -= proton;
        Multis += 7;
        proton += protonAdd;
        protonHave += 1;
        refresh();
    } else {
        const alertDiv = document.getElementById('alertDiv');
        alertDiv.classList.remove('hidden');
        setTimeout(() => {
            alertDiv.classList.add('hidden'); 
        }, 3000);
    } 
}


// photon

let photon = 50000;
let photonAdd = 2000;
let photonHave = 0;

function FunPhoton() {
    if(Money >= photon) {
        Money -= photon;
        Multis += 10;
        photon += photonAdd;
        photonHave += 1;
        refresh();
    } else {
        const alertDiv = document.getElementById('alertDiv');
        alertDiv.classList.remove('hidden');
        setTimeout(() => {
            alertDiv.classList.add('hidden'); 
        }, 3000);
    } 
}



// Refresh / Don't touch

function refresh() {
    // Format and update Money
    format(Money);
    document.getElementById("multi-main").innerHTML = "Par clique: " + Multis;

    // fusion
    document.getElementById("fusion-price").innerHTML = "Prix : " + formatNumber(fusion);
    document.getElementById("fusion-have").innerHTML = "Vous en avez : " + formatNumber(fusionHave);

    // electron
    document.getElementById("electron-price").innerHTML = "Prix : " + formatNumber(electron);
    document.getElementById("electron-have").innerHTML = "Vous en avez : " + formatNumber(electronHave);

    // Neutron
    document.getElementById("neutron-price").innerHTML = "Prix : " + formatNumber(neutron);
    document.getElementById("neutron-have").innerHTML = "Vous en avez : " + formatNumber(neutronHave);

    // proton
    document.getElementById("proton-have").innerHTML = "Prix : " + formatNumber(proton);
    document.getElementById("proton-have").innerHTML = "Vous en avez : " + formatNumber(protonHave);
    

    // photon
    document.getElementById("photon-have").innerHTML = "Prix : " + formatNumber(photon);
    document.getElementById("photon-have").innerHTML = "Vous en avez : " + formatNumber(photonHave);
    
}











// Don't touch

function format(number) {
    let n = number;
    if (number >= 1000000000000000000) {
        n = (number / 1000000000000000000) + "QT";
    } else if (number >= 1000000000000000) {
        n = (number / 1000000000000000) + "Q";
    } else if (number >= 1000000000000) {
        n = (number / 1000000000000) + "T";
    } else if (number >= 1000000000) {
        n = (number / 1000000000) + "B";
    } else if (number >= 1000000) {
        n = (number / 1000000) + "M";
    } else if (number >= 1000) {
        n = (number / 1000) + "k";
    }
    document.getElementById("coins-main").innerHTML = "Coins: " + n;
    document.getElementById("coins-shop").innerHTML = "Coins: " + n;
    document.getElementById("coins-stat").innerHTML = "Coins: " + n;
    document.getElementById("total-click").innerHTML = "Nombre total de clique: " + Clicks;
}

function formatNumber(number) {
    if (number >= 1000000000000000000) {
        return (number / 1000000000000000000) + "QT";
    } else if (number >= 1000000000000000) {
        return (number / 1000000000000000) + "Q";
    } else if (number >= 1000000000000) {
        return (number / 1000000000000) + "T";
    } else if (number >= 1000000000) {
        return (number / 1000000000) + "B";
    } else if (number >= 1000000) {
        return (number / 1000000) + "M";
    } else if (number >= 1000) {
        return (number / 1000) + "k";
    } else {
        return number.toString();
    }
}

// Function Show

function ShowShop() {
    document.getElementById("page-shop").style.display = "block";
    document.getElementById("page-clicker").style.display = "none";
    document.getElementById("page-stat").style.display = "none";
    document.getElementById("page-profil").style.display = "none";
}

function ShowClicker() {
    document.getElementById("page-clicker").style.display = "block";
    document.getElementById("page-shop").style.display = "none";
    document.getElementById("page-stat").style.display = "none";
    document.getElementById("page-profil").style.display = "none";
}

function ShowStat() {
    document.getElementById("page-stat").style.display = "block";
    document.getElementById("page-shop").style.display = "none";
    document.getElementById("page-clicker").style.display = "none";
    document.getElementById("page-profil").style.display = "none";
}

function ShowProfil() {
    document.getElementById("page-profil").style.display = "block";
    document.getElementById("page-clicker").style.display = "none";
    document.getElementById("page-shop").style.display = "none";
    document.getElementById("page-stat").style.display = "none";
}

