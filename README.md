# Örnek Javascript Uyguamaları
Bu repoda **javascript** öğrenirken kodladığım basit örnekler bulunmaktadır. Bu örneklerde temel hedef **javascript** olup html ve css kodlarına önem verilmemiştir.

## [Yazı Değiştirme Uygulaması](01-yazi-degistirme-uygulamasi.html)
Bu örnekte, javascript ile h1 etiketi içindeki Merhaba yazan yazıyı, inputboxa değiştirmek istediğimiz metni yazdıktan sonra değiştir butonuna basıp **yazının değiştiği** uygulamadır.
## [Sayaç Uygulaması](02-sayac-uygulamasi.html)
Bu örnekte, bir sayıyı **artırıp azaltmak** için kullanılır. Kullanıcı **Arttır** butonu ile sayıyı birer birer arttırır, **Azalt** butonu ile sayıyı birer birer azaltır.
## [Hesap Makinesi Uygulaması](03-hesap-makinesi-uygulamasi.html)
Bu örnekte, **Toplama,çıkarma,çarpma ve bölme** gibi işlemlerinin yapıldığı hesap makinesi uygulamasıdır. **Tüm işlemi** silme ve **birer birer** silme özelliği mevcuttur. 
## [Çoklu Metin Değiştirme Uygulaması](04-coklu-metin-uygulamasi.html)
Bu örnekte, inputboxa yazdığımız metni, h1,h2,h3,h4,h5,h6 etiketlerinde **anlık olarak değiştiğini** gördüğümüz bir uygulamadır.
## [Harf Uzunluğu Kadar Yazdırma Uygulaması](05-harf-uzunlugu-uygulamasi.html)
Bu örnekte, inputboxtan aldığımız metni, inputboxa yazdığımız **harfin uzunluğu kadar** aynı harfi alt alta yazdıran uygulamadır.
## [Soru Cevap Uygulaması](06-soru-cevap-uygulamasi.html)
Bu örnekte, ekranda **sorular ve cevap yazan butonlar** bulunmaktadır.Cevap butonuna **tıklamadan cevaplar gözükmemektedir**. Cevap butonuna **tıklayınca cevabın gözüktüğü** uygulamadır.
## [Fetch İle Veri Çekme Uygulaması](07-fetch-uygulamasi.html)
Bu örnekte, [örnek json verisi](https://dummyjson.com/) ile **fetch** fonksiyonu kullanarak **verilerin çeklip listelendiği** bir uygulamadır.


### Uygulama yaparken öğrendim bilgiler

#### Javascriptte fonksiyon nasıl oluşturulur ?
function anahatar kelimenin yanına fonksiyon ismi yazılıp oluşturulur. Aşağıda bir örnek bulunmaktadır.
```javascript
function functionName(parameters) {
    // Fonksiyonun işlevi burada tanımlanır
    // Parametrelerle birlikte çalışacak kodlar buraya yazılır
    // İşlemler tamamlandıktan sonra istenilen çıktı döndürülebilir
    return result;
}

```
#### Html bir elementin değeri nasıl alınır?
Örneğin h1 elementinin id değeri **textInput** olsun değeri Aşağıda bir örnek bulunmaktadır.
```javascript
function test() {
 var elementValue = document.getElementById("textInput").value;
}
```
#### const ile let arasında ne fark var ?
**const**, bir kez atandıktan sonra, değeri değiştirilemez. **Let** ise değiştirlir.

#### Javascriptte belli başlı eventler
**Eventler**: Javascript kodlarının-komutlarının HTML ile etkileşime geçmesine olanak sağlamaktadır. 

•`onclick`: Bir nesneye tıklandığında çalışacak kodları yerine getirir.

•`onsubmit`: Bir formu onaylarken harekete geçer.

•`onchange`: Bir elemana değişiklik yapıldığında harekete geçer.

•`oninput`: Kullanıcı tarafından form elemanına her veri girişinde çalışmaktadır.

•`onkeyup`: Bir tuş bırakıldığında harekete geçer.

•`onkeydown`: bir tuşa basıldığında harekete geçer.


#### innerText,innerHTML, nedir ve farkları nedir?
•`innerText`: HTML elementinin içerdiği metni temsil eder. Bu özellik, elementin içeriğini **sadece metin** olarak alır veya ayarlar. HTML etiketlerini dikkate almaz ve yalnızca görünen metni döndürür. 

•`innerHTML`: Bir HTML elementinin içeriğini temsil eder. Bu özellik, elementin içeriğini **HTML biçiminde** alır veya ayarlar.

#### String bir ifadenin harf uzunluğu nasıl alınır?
```javascript
var kelime = "kaan";
var uzunluk = kelime.length;
console.log("Kaan ifadesinin harf sayısı: " + uzunluk); //4
```

#### Bir elementin görünürlüğü nasıl değiştirilir?
Örneğin idsi element olan  h1 etiketinin görünürlüğünü değiştirme.
```html
<h1 id="element">
Örnek Yazı
</h1>
```
Bu şeklide h1 etiketi **görünür** hale gelir.
```javascript
document.getElementById("element").style.display = "block";
```
Bu şeklide h1 etiketi **görünmez** hale gelir.
```javascript
document.getElementById("element").style.display = "none";
```
#### Fetch fonksiyonu ne işe yarar ve then metodu ne işe yarar? fetchten gelen veriler nasıl kullanılır?
**Fetch**, belirtilen URL'ye bir HTTP GET isteği gönderir. Aşağıda örnek bulunmaktadır.
```javascript
fetch('https://dummyjson.com/products/1')
```
`then()`, örneğin **fetch** ile gönderilen bir isteğin **başarıyla çözüldüğünde veya reddedildiğinde** çağrılan bir geri çağırma fonksiyonunudur. 
Aşağıdaki örnekte cevabı çağırıp sonra bu cevabı jsona çeviren örnek  bulunmaktadır.
```javascript
.then(res => res.json())
```
 Gelen cevabı Json formatına çevirdiğimiz veriyi tekrardan then metodu ile verileri elde edebililiyoruz. Bize bir obje dönüyor. Aşağıda örnek bulunmaktadır. Console.log ile consolda verileri görebiliriz.
 ```javascript
 .then(data => console.log(data))
```
 Tüm datayı değilde jsondaki örneğin **title** verisi görmek istiyorsanız Aşağıdaki örneği kullanabilirsiniz.
  ```javascript
 .then(data => console.log(data.title))
```
 Örnek bir fetch kodu
```javascript
fetch('https://example.com')
  .then(response => {
    // Yanıt alındığında yapılacak işlemler
    // Örneğin, yanıtı JSON formatına dönüştürme
    return response.json();
  })
  .then(data => {
    // Dönüştürülen veriyi kullanma
    console.log(data);
  })
  .catch(error => {
    // Hata durumunda yapılacak işlemler
    console.error('Bir hata oluştu:', error);
  });       
```
#### Map fonksiyonu ne işe yarar ve nasıl kullanılır?
`map()`, fonksiyounu çoklu verileri **döngüye sokar** ve bir **diziye çevirir**. Bu veriler yeni bir **diziye** eklenir Aşağıda örnek bulunmaktadır.
```javascript
const numbers = [1, 2, 3, 4, 5];
// Her bir sayının karesini hesaplayan bir map fonksiyonu
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // Çıktı: [1, 4, 9, 16, 25]
```
 #### Join ne işe yarar ve nasıl kullanılır?
`join()`, bir dizideki tüm öğeleri birleştirerek bir dize oluşturur. Bu yöntem, dizi öğelerini birleştirirken belirtilen bir ayırıcıyı kullanır. Aşağıda örnek bulunmaktadır.
```javascript
const numbers = [1, 2, 3, 4, 5];
// const fruits = ["Elma", "Armut", "Muz", "Üzüm"];
const result = fruits.join("-");
console.log(result);  // Çıktı: [Elma-Armut-Muz-Üzüm]
```



