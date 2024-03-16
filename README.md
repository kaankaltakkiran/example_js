# Örnek Javascript Uyguamaları

## Uygulama yaparken öğrendim bilgiler

### Javascriptte fonksiyon nasıl oluşturulur ?
function anahatar kelimenin yanına fonksiyon ismi yazılıp oluşturulur. Aşağıda bir örnek bulunmaktadır.
```javascript
function functionName(parameters) {
    // Fonksiyonun işlevi burada tanımlanır
    // Parametrelerle birlikte çalışacak kodlar buraya yazılır
    // İşlemler tamamlandıktan sonra istenilen çıktı döndürülebilir
    return result;
}

```
### Html bir elementin değeri nasıl alınır?
Örneğin h1 elementinin id değeri **textInput** olsun değeri Aşağıda bir örnek bulunmaktadır.
```javascript
function test() {
 var elementValue = document.getElementById("textInput").value;
}
```

### Javascriptte belli başlı eventler
**Eventler**: Javascript kodlarının-komutlarının HTML ile etkileşime geçmesine olanak sağlamaktadır. 

•**onclick**: Bir nesneye tıklandığında çalışacak kodları yerine getirir.

•**onsubmit**: Bir formu onaylarken harekete geçer.

•**onchange**: Bir elemana değişiklik yapıldığında harekete geçer.

•**oninput**: Kullanıcı tarafından form elemanına her veri girişinde çalışmaktadır.

•**onkeyup**: Bir tuş bırakıldığında harekete geçer.

•**onkeydown**: bir tuşa basıldığında harekete geçer.


### innerText,innerHTML, nedir ve farkları nedir?
•**innerText**: HTML elementinin içerdiği metni temsil eder. Bu özellik, elementin içeriğini **sadece metin** olarak alır veya ayarlar. HTML etiketlerini dikkate almaz ve yalnızca görünen metni döndürür. 

•**innerHTML**: Bir HTML elementinin içeriğini temsil eder. Bu özellik, elementin içeriğini **HTML biçiminde** alır veya ayarlar.

