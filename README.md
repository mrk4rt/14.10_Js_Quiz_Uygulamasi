# Quiz Uygulaması

## Amaç

Kullanıcıya çoktan seçmeli sorular sorarak bir quiz hazırlamak. Bu uygulama, kullanıcıların bilgi seviyesini değerlendirmeye yardımcı olacak ve eğlenceli bir öğrenme deneyimi sunacaktır.

## Anahtar Kelimeler

- **Switch-case**
- **For döngüsü**
- **If-else**
- **Do-while**
- **Puan hesaplama**
- **Çoktan seçmeli soru**

## Değişkenler

- `sorular`: Quiz sorularını içeren dizi.
- `cevaplar`: Doğru cevapları tutan dizi.
- `kullaniciPuan`: Kullanıcının puanını tutan değişken.
- `soruSayisi`: Toplam soru sayısını tutan değişken.
- `soru`: Kullanıcının şu anki sorusunu tutan değişken.
- `secenek`: Kullanıcının seçimini tutan değişken.
- `devam`: Kullanıcının tekrar denemek isteyip istemediğini kontrol eden değişken.

## Giriş

Uygulama, kullanıcıdan soruları sunarak başlar. Her soruda kullanıcının seçim yapması için seçenekler verilir. Kullanıcı doğru cevap verdikçe puanı artar.

## Gelişme

1. **Soruların Tanımlanması**:

   - `sorular` ve `cevaplar` dizileri oluşturulur ve içerikleri tanımlanır.

2. **Kullanıcıdan Giriş Alma**:

   - `for` döngüsü kullanılarak her bir soru için kullanıcıdan cevap alınır.

3. **Cevap Kontrolü**:

   - Kullanıcının verdiği cevap, `switch-case` yapısıyla kontrol edilir.
   - Doğru cevap verildiğinde `kullaniciPuan` artırılır.

4. **Sonuç Değerlendirmesi**:

   - Soru sayısının tamamlanmasının ardından, `if-else` yapısıyla kullanıcının başarı durumu değerlendirilir ve uygun bir tebrik mesajı gösterilir.

5. **Tekrar Deneme Seçeneği**:
   - Kullanıcıya yeniden deneme şansı tanımak için `do-while` döngüsü kullanılır.

## Sonuç

Quiz uygulaması, kullanıcıların bilgilerini test etmesine olanak tanırken eğlenceli bir deneyim sunar. Uygulamanın sonunda kullanıcı, ne kadar başarılı olduğunu görür ve dilerse tekrar deneme şansı elde eder.

## Adım Adım Geliştirme Aşamaları

1. **Proje Kurulumu**:

   - Gerekli değişkenlerin tanımlanması ve başlangıç değerlerinin atanması.

2. **Soruların ve Cevapların Belirlenmesi**:

   - Soru ve cevap dizilerinin oluşturulması.

3. **Ana Döngü ve Soru Sunumu**:

   - `for` döngüsü ile soruların sırayla kullanıcıya sunulması.

4. **Cevap Alma ve Değerlendirme**:

   - Kullanıcının verdiği cevabın kontrol edilmesi ve puan hesaplaması.

5. **Sonuçların Gösterilmesi**:

   - Kullanıcı puanına göre tebrik mesajının gösterilmesi.

6. **Yeniden Deneme Seçeneği**:
   - Kullanıcıdan tekrar deneme isteği alınması ve `do-while` döngüsü ile uygulamanın yeniden başlatılması.

## Sorular ve Cevaplar

1. **JavaScript hangi tür bir dildir?**
   - 1. Dinamik
   - 2. Statik
   - 3. Programlama
   - 4. İşletim Sistemi  
   **Doğru Cevap:** 1. Dinamik

2. **HTML açılımı nedir?**
   - 1. Hyperlink and Text Markup Language
   - 2. Hyper Text Markup Language
   - 3. High-Level Text Markup Language
   - 4. Hyper Text Multi Language  
   **Doğru Cevap:** 2. Hyper Text Markup Language

3. **CSS ne için kullanılır?**
   - 1. Sayfanın yapısını tanımlamak
   - 2. Stil vermek
   - 3. Sunucu ile iletişim kurmak
   - 4. Veritabanı yönetimi  
   **Doğru Cevap:** 2. Stil vermek

4. **JavaScript'te değişken tanımlamak için hangi anahtar kelimeler kullanılır?**
   - 1. var, let, const
   - 2. int, string, boolean
   - 3. define, const, let
   - 4. variable, let, const  
   **Doğru Cevap:** 1. var, let, const

5. **DOM, açılımı nedir?**
   - 1. Document Object Model
   - 2. Data Object Model
   - 3. Dynamic Object Model
   - 4. Document Offline Model  
   **Doğru Cevap:** 1. Document Object Model

6. **JavaScript'te bir fonksiyon nasıl tanımlanır?**
   - 1. function myFunction() {}
   - 2. myFunction() function {}
   - 3. function:myFunction() {}
   - 4. myFunction = function() {}  
   **Doğru Cevap:** 1. function myFunction() {}
