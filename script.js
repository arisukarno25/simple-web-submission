const cacheKey = "NUMBER";
const cacheKey2 = "NUMBER2";
const cacheKey3 = "NUMBER3";
if (typeof(Storage) !== "undefined") {
    if (sessionStorage.getItem(cacheKey && cacheKey2 && cacheKey3) === "undefined") {
        sessionStorage.setItem(cacheKey && cacheKey2 && cacheKey3, 0);
    }
    const button = document.querySelector("#button");
    const count = document.querySelector("#count");
    button.addEventListener('click', function(event) {
        let number = sessionStorage.getItem(cacheKey);
        number++;
        sessionStorage.setItem(cacheKey, number);
        count.innerText = sessionStorage.getItem(cacheKey);
    })
    const button2 = document.querySelector("#button2");
    const count2 = document.querySelector("#count2");
    button2.addEventListener('click', function(event) {
        let number2 = sessionStorage.getItem(cacheKey2);
        number2++;
        sessionStorage.setItem(cacheKey2, number2);
        count2.innerText = sessionStorage.getItem(cacheKey2);
    })
    const button3 = document.querySelector("#button3");
    const count3 = document.querySelector("#count3");
    button3.addEventListener('click', function(event) {
        let number3 = sessionStorage.getItem(cacheKey3);
        number3++;
        sessionStorage.setItem(cacheKey3, number3);
        count3.innerText = sessionStorage.getItem(cacheKey3);
    })
} else {
    alert("Browser tidak mendukung Web Storage")
}