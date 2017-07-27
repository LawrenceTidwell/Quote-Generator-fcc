$(document).ready(function() {
   create();

   function create() {
     var quote = [
       'We should certainly count our blessings, but we should also make our blessings count.',
       'Gratitude unlocks the fullness of life. It turns what we have into enough, and more.',
       'Generosity consists not the sum given, but the manner in which it is bestowed.',
       'Hope lies in dreams, in imagination and in the courage of those who dare to make dreams into reality.',
       'They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.',
       'Learn from yesterday, live for today, hope for tomorrow.',
       'We all live with the objective of being happy; our lives are all different and yet the same.',
       'We dont need to share the same opinions as others, but we need to be respectful.',
       'In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.',
       'Although the world is full of suffering, its full also of overcoming it.',
     ];
     randomQ = quote[Math.floor(Math.random() * quote.length)];
     quoteAuthor = randomQ.split('@');
     $(".theQuote").text(quoteAuthor[0]);
   }
   $('.button').on('click', function() {
     create();
   });
 });
