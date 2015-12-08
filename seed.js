var mongoose = require('mongoose'),
  Berry = require('./models/berry.js');

mongoose.connect('mongodb://localhost/liberry', function(err) {
  if (err) {
    console.log('DB connection error: ', err);
  } else {
    console.log('DB connection successful.');
  }
});

var berry1 = new Berry ({
  category: 'book',
  title: 'Between the World and Me',
  author: 'Ta-Nehisi Coates',
  tags: '#sociology #racerelations',
  reference: 'I was learning to live in the disquiet... in the mess of my mind. The gnawing discomfort, the chaos, the intellectual vertigo was not an alarm. It was a beacon. (p. 52)',
  imgurl: 'https://books.google.com/books/content?id=TV05BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73gO9Dj6mrMt3-XGp5SQDdtPdLmsnqXczKLwnMkuXbWd1gQ6IRGbl-UBsIDs4DMnEXkGTZYYrJ5hjyKei5GH1b8KXKsD_vcF3oI0JsHuH9HM5YqEdP2nvQ4vByuvmFOeHhGkK00',
  URL: 'http://www.amazon.com/Between-World-Me-Ta-Nehisi-Coates-ebook/dp/B00SEFAIRI'
});

berry1.save(function(err) {
  if (err) {
    return handleError(err)
  } else {
    console.log('saved');
  }
});

var berry2 = new Berry ({
  category: 'op-ed',
  title: 'How I’d Rein In Wall Street',
  author: 'Hillary Clinton',
  tags: '#politics',
  reference: 'My plan would strengthen the Volcker Rule by closing the loopholes that still allow banks to make speculative gambles with taxpayer-backed deposits. And I would fight to reinstate the rules governing risky credit swaps and derivatives at taxpayer-backed banks....',
  imgurl: 'http://static01.nyt.com/images/2015/12/07/opinion/sunday/07clinton/07clinton-master675.jpg',
  URL: 'http://www.nytimes.com/2015/12/07/opinion/hillary-clinton-how-id-rein-in-wall-street.html'
});

berry2.save(function(err) {
  if (err) {
    return handleError(err)
  } else {
    console.log('saved');
  }
});