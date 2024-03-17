# Örnek Javascript Uyguamaları
Bu repoda **javascript** öğrenirken kodladığım basit örnekler bulunmaktadır. Bu örneklerde temel hedef **javascript** olup html ve css kodlarına önem verilmemiştir.

## [Yazı Değiştirme Uygulaması](01.html)
Bu örnekte, javascript ile h1 etiketi içindeki Merhaba yazan yazıyı, inputboxa değiştirmek istediğimiz metni yazdıktan sonra değiştir butonuna basıp **yazının değiştiği** uygulamadır.
## [Sayaç Uygulaması](02.html)
Bu örnekte, bir sayıyı **artırıp azaltmak** için kullanılır. Kullanıcı **Arttır** butonu ile sayıyı birer birer arttırır, **Azalt** butonu ile sayıyı birer birer azaltır.
## [Hesap Makinesi Uygulaması](03.html)
Bu örnekte, **Toplama,çıkarma,çarpma ve bölme** gibi işlemlerinin yapıldığı hesap makinesi uygulamasıdır. **Tüm işlemi** silme ve **birer birer** silme özelliği mevcuttur. 
## [Çoklu Metin Değiştirme Uygulaması](04.html)
Bu örnekte, inputboxa yazdığımız metni, h1,h2,h3,h4,h5,h6 etiketlerinde **anlık olarak değiştiğini** gördüğümüz bir uygulamadır.
## [Harf Uzunluğu Kadar Yazdırma Uygulaması](05.html)
Bu örnekte, inputboxtan aldığımız metni, inputboxa yazdığımız **harfin uzunluğu kadar** aynı harfi alt alta yazdıran uygulamadır.
## [Soru Cevap Uygulaması](06.html)
Bu örnekte, ekranda **sorular ve cevap yazan butonlar** bulunmaktadır.Cevap butonuna **tıklamadan cevaplar gözükmemektedir**. Cevap butonuna **tıklayınca cevabın gözüktüğü** uygulamadır.
## [Fetch İle Veri Çekme Uygulaması](07.html)
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




