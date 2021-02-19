// alinan yilin artik olup olmadigini hesapla

yil = prompt("yil giriniz","2021");
console.warn(artikMi(yil));

function artikMi(a){
    if((a % 400) == 0 || (a % 4) == 0 && (a%100) != 0){
        return true;
    }else{
        return false;
    }
}

// kullanici 0 degerini girene kadar girilen sayilari carp

let sayi = parseInt(prompt("Bir sayi giriniz","1"));
let carpim = 1;

while(sayi != 0){
    carpim *= sayi;
    sayi = parseInt(prompt("Bir sayi giriniz","1"));
}
console.log("Islem sonucu = " + carpim);


// vize - final

const gecmeNotu = 50;
let vize,final;
const ortalama = Math.floor((vize * 4)/10 + (final * 6)/10);

vize = parseInt(prompt("1. vize notunuzu giriniz","05"));
final = parseInt(prompt("final notunuzu giriniz","05"));

if((vize > 100 || vize < 0 ) || (final > 100 || final < 0)){
    console.error("hatali giris");
}
else
{
    if(ortalama >= gecmeNotu){
        console.warn("dersi gectiniz");
    }else if(ortalama < gecmeNotu){
        console.error("dersi gecemediniz");
    }
}

// 1'den 100'e kadar olan sayilari topla;


let toplam = 0;
for(let j=1;j<=100;j++)
{
    toplam += j;
}
console.log(toplam);


// sicak - soguk 

let uretilenSayi1 = Math.floor((Math.random() * 90) +10);
console.log(uretilenSayi1);
let alinanSayi1 = parseInt(prompt("100'e kadar bir sayi yazin. \n Maksimum 10 kez deneyebilirsiniz.","99"));

let denemeSayisi = 1;

while(uretilenSayi1 !== alinanSayi1){
    

    if(alinanSayi1>100 || alinanSayi1<0 || alinanSayi1 === null || alinanSayi1 === ""){
        alert("Hatali deger.");
        break;
    }else{
        if(denemeSayisi === 10){
            alert.error("Deneme sayiniz 10'a ulasti.");
            break;
        }else{
    
            if(alinanSayi1 !== uretilenSayi1){
    
                if(alinanSayi1<uretilenSayi1){
                    if(denemeSayisi < 2){
                        alert("sayiyi yukselt");
                        alinanSayi1 = parseInt(prompt(`${denemeSayisi} Kadar basarisiz oldun. Tekrar dene:`));
                        denemeSayisi++;
                    }else{
                        alert("sayiyi yukselt, denemeye devam et.");
                        alinanSayi1 = parseInt(prompt(`${denemeSayisi} Kadar basarisiz oldun. Tekrar dene:`));
                        denemeSayisi++;
                    }
                    
                }else if(alinanSayi1>uretilenSayi1){
                    if(denemeSayisi < 2){
                        alert("sayiyi dusult");
                        alinanSayi1 = parseInt(prompt(`${denemeSayisi} Kadar basarisiz oldun. Tekrar dene:`));
                        denemeSayisi++;
                    }
                    else{
                        alert("sayiyi dusult, henuz sansin bitmedi!");
                        alinanSayi1 = parseInt(prompt(`${denemeSayisi} Kadar basarisiz oldun. Tekrar dene:`));
                        denemeSayisi++;
                    }
                }
        
            }else if(alinanSayi1 === uretilenSayi1){
        
                if(denemeSayisi === 0){
                    alert("Tekte bildin! Tuttugun sayi = " + alinanSayi1 + " Uretilen sayi = "+ uretilenSayi1);
                    break;
                }else{
                    alert("Dogru bildin! Tuttugun sayi = " + alinanSayi1 + " Uretilen sayi = "+ uretilenSayi1
                          + "Deneme sayin = " + denemeSayisi);
                    break;
                }
                
            }
    
        }
    }
    
}