// Quiz Uygulaması

// Değişkenler
const sorular = [
    "JavaScript hangi tür bir dildir?",
    "HTML açılımı nedir?",
    "CSS ne için kullanılır?",
    "JavaScript'te değişken tanımlamak için hangi anahtar kelimeler kullanılır?",
    "DOM, açılımı nedir?",
    "JavaScript'te bir fonksiyon nasıl tanımlanır?"
];

const cevaplar = [
    "1. Dinamik\n2. Statik\n3. Programlama\n4. İşletim Sistemi",
    "1. Hyperlink and Text Markup Language\n2. Hyper Text Markup Language\n3. High-Level Text Markup Language\n4. Hyper Text Multi Language",
    "1. Sayfanın yapısını tanımlamak\n2. Stil vermek\n3. Sunucu ile iletişim kurmak\n4. Veritabanı yönetimi",
    "1. var, let, const\n2. int, string, boolean\n3. define, const, let\n4. variable, let, const",
    "1. Document Object Model\n2. Data Object Model\n3. Dynamic Object Model\n4. Document Offline Model",
    "1. function myFunction() {}\n2. myFunction() function {}\n3. function:myFunction() {}\n4. myFunction = function() {}"
];

let kullaniciPuan = 0;
let soruSayisi = sorular.length;
let devam;

do {
    for (let i = 0; i < soruSayisi; i++) {
        let soru = sorular[i];
        let secenek = prompt(`${i + 1}. Soru: ${soru}\nCevap seçenekleri:\n${cevaplar[i]}\nCevabınızı girin:`);

        // Cevap kontrolü
        switch (i) {
            case 0:
                if (secenek === "1") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 1. Dinamik");
                }
                break;
            case 1:
                if (secenek === "2") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 2. Hyper Text Markup Language");
                }
                break;
            case 2:
                if (secenek === "2") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 2. Stil vermek");
                }
                break;
            case 3:
                if (secenek === "1") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 1. var, let, const");
                }
                break;
            case 4:
                if (secenek === "1") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 1. Document Object Model");
                }
                break;
            case 5:
                if (secenek === "1") {
                    alert("Doğru cevap!");
                    kullaniciPuan++;
                } else {
                    alert("Yanlış cevap! Doğru cevap: 1. function myFunction() {}");
                }
                break;
            default:
                break;
        }
    }

    // Sonuç değerlendirmesi
    if (kullaniciPuan >= 4) {
        alert(`Tebrikler! ${kullaniciPuan} doğru cevap verdiniz.`);
    } else {
        alert(`Maalesef, ${kullaniciPuan} doğru cevap verdiniz. Daha iyi bir sonuç için tekrar deneyin.`);
    }

    // Tekrar deneme isteği
    devam = confirm("Yeniden denemek ister misiniz?");
    // Eğer kullanıcı yeniden denemek isterse, puanı sıfırla
    kullaniciPuan = 0;

} while (devam);
