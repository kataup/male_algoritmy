const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];
 
 
 // 1. vypište všechna čísla do stránky
 document.body.innerHTML += `<h2>1. Všechna čísla.</h2>`;
 numbers.forEach((num) => {
   document.body.innerHTML += `<p>${num}</p>`;
 })
 
 
 // 2. druhá mocnina všech čísel
 
 
 document.body.innerHTML += `<h2>2. Druhé mocniny.</h2>`;
 numbers.forEach((num) => {
   document.body.innerHTML += `<p>${num ** 2}</p>`;
 })
 // 3. Vypište do stránky pouze záporná čísla.
 
 
 document.body.innerHTML += `<h2>3. Záporná čísla.</h2>`;
 numbers.forEach((num) => {
  if (num < 0) {
    document.body.innerHTML += `<p>${num}</p>`;
  }});
 
 
 // 4. Vypište do stránky absolutní hodnotu všech čísel.
 
 
 document.body.innerHTML += `<h2>4. Absolutní hodnoty</h2>`;
 numbers.forEach((num) => {
   document.body.innerHTML += `<p>${Math.abs(num)}</p>`;
 });
 
 
 // 5. Vypište do stránky pouze sudá čísla.
 
 
 document.body.innerHTML += `<h2>5. Sudá čísla.</h2>`;
 numbers.forEach((num) => {
   if (num % 2 === 0) {
     document.body.innerHTML += `<p>${num}</p>`;
   }
 });
 
 
 // 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
 
 
 document.body.innerHTML += `<h2>6. Dělitelná třemi.</h2>`;
 numbers.forEach((num) => {
  if (Math.abs(num) % 3 === 0) {
    document.body.innerHTML += `<p>${num}</p>`;
  }
 });
 
 
 // 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
 
 
 document.body.innerHTML += `<h2>7. Vzdálenost od čísla 5.</h2>`;
 numbers.forEach((num) => {
   document.body.innerHTML += `<p>${Math.abs(num - 5)}</p>`;
 });
 
 
 // 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
 
 
 document.body.innerHTML += `<h2>8. Druhé mocniny vzdáleností od čísla 5.</h2>`;
 numbers.forEach((num) => {
  const vzdalenost = Math.abs(num - 5);
  document.body.innerHTML += `<p>${vzdalenost ** 2}</p>`;
 });
 
 
 // 9. Spočítejte, kolik je v seznamu záporných čísel.
 
 
 let cislo = 0;
 numbers.forEach((num) => {
  if (num < 0)
    cislo = cislo + 1;
 });
 document.body.innerHTML += `<h2>9. Počet záporných čísel.</h2>`;
 document.body.innerHTML += `<p>${cislo}</p>`;
 
 // 10. Spočítejte součet všech čísel v poli.
 
 
 document.body.innerHTML += `<h2>10. Součet všech čísel.</h2>`;
 let soucet = 0;
 numbers.forEach((num) => {
  soucet = soucet + num;
 });
 
 
 document.body.innerHTML += `<p>${soucet}</p>`;
 
 
 // 11. Spočítejte průměr všech čísel v poli.
 
 
 let soucet2 = 0;
 numbers.forEach((num) => {
  soucet2 = soucet2 + num;
 });
 
 
 const prumer = soucet2 / numbers.length;
 document.body.innerHTML += `<h2>11. Průměr všech čísel.</h2>`;
 document.body.innerHTML += `<p>${prumer}</p>`;
 
 
 // 12. Spočítejte součet všech kladných čísel v poli.
 
 
 let soucet3 = 0;
 numbers.forEach((num) => {
  if (num > 0)
  soucet3 = soucet3 + num;
 });
 document.body.innerHTML += `<h2>12. Součet kladných čísel.</h2>`;
 document.body.innerHTML += `<p>${soucet3}</p>`;