// ============================================================
// 🎵 Fungsi untuk memulai musik
// ============================================================
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function () {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });

const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

// ============================================================
// ⏳ Countdown Timer
// ============================================================
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sept 01, 2025 16:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }
  }, second)

// ============================================================
// SLIDE 1 (Birthday + clown prank with global #tap)
// ============================================================
const _slideSatu = function () {
  const tap = document.getElementById('tap'); // global clown tap
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none'); // show the prank tap
  }, 7000);
};

function stopAllClownSounds() {
  const tapSounds = [
    document.getElementById('tap-sound1'),
    document.getElementById('tap-sound2'),
    document.getElementById('tap-sound3')
  ];
  tapSounds.forEach(s => {
    s.pause();
    s.currentTime = 0; // reset to start
  });
}

// ============================================================
// SLIDE 2 (Notebook page with TypeIt + tap-note)
// ============================================================
const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  const tap = document.getElementById('tap'); // hide prank tap
  const slideDua = document.getElementById('slideDua');
  stopAllClownSounds();
  const tapNote = slideDua.querySelector('.tap-note');

  // hide clown tap
  tap.classList.add('d-none');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');

  // typing effect
  new TypeIt("#teks1", {
    strings: [
      "lemme syd and u can emp",
      " ",
      "- louis (with love)"
    ],
    speed: 75,
    waitUntilVisible: true
  })  
    .exec(() => {
      // only show tap-note when typing finishes
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
        slideDua.classList.remove('animate__delay-2s', 'animate__slow');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideDua.remove();
          _slideTiga();
        }, 1000);
      });
    })
    .go();
};

const _slideTiga = function () {
  const slideTiga = document.getElementById('slideTiga');
  const tapNote = slideTiga.querySelector('.tap-note');

  slideTiga.classList.remove('d-none');

  new TypeIt("#teks2", {
    strings: [
      "hi deepesh my hb my fellow brownie minority everywhere including this friendgroup ,,",
      " ",
      "have the most wonderfullest day and the most wonderfullest rest of the days of ur life",
      " ",
      "bc lowkey ur the most deserving of it compared to the rest of the world say real ! (REAL)",
      " ",
      "anyway we love u see u in 2 days stupid bc we gonna run it back !",
      " ",
      "- darlene nicol mei angsiangco"
    ],
    speed: 75,
    waitUntilVisible: true
  })  
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
        slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideTiga.remove();
          _slideEmpat();
        }, 1000);
      });
    })
    .go();
};

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const tapNote = slideEmpat.querySelector('.tap-note');

  slideEmpat.classList.remove('d-none');

  new TypeIt("#teks3", {
    strings: [
      "HAPPY BIRTHDAY DEEPESH!!!",
      " ",
      "It's been around a year since we met each other at RC and tbh we didn't really talk much until later.",
      " ",
      "However, you are always so friendly and you bring such good vibes into every moment!",
      " ",
      "I really enjoy being friends with you and I wish we could play mahjong one last time before you leave sg 😆😆(plz don’t forget us or I WILL haunt you!)",
      " ",
      "LETS GO ESCAPE ROOM AGAIN! I'll make sure I will not close the door on you this time. 😂",
      " ",
      "HAPPY BIRTHDAY!!!! 🥳",
      " ",
      "- yvette"
    ],
    speed: 75,
    waitUntilVisible: true
  })
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideEmpat.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideEmpat.remove();
          _slideEnam();
        }, 1000);
      });
    })
    .go();
};

// const _slideLima = function () {
//   const slideLima = document.getElementById('slideLima');
//   const tapNote = slideLima.querySelector('.tap-note');  

//   slideLima.classList.remove('d-none');

//   new TypeIt("#teks4", {
//     strings: [
//       "HAPPY BIRTHDAY DEEPESHH!!!", 
//       "you’re truely an amazing guy and im so appreciative that you’re always so positive and hyped up!",
//       "im forever thankful for the moments we have together just laughing and having fun,",
//       "that’ll be something that i’d truly miss.",
//       "have an amazing 19th birthday and never change that amazing smile on your face!!",
//       "",
//       "with all the love in the world,",
//       "yee heng"
//     ],
//     speed: 75,
//     waitUntilVisible: true
//   })
//   .exec(() => {
//     tapNote.classList.remove('d-none');
//     tapNote.addEventListener('click', function () {
//       slideLima.classList.replace('animate__fadeInRight', 'animate__fadeOut');
//       tapNote.classList.add('d-none');
//       setTimeout(function () {
//         slideLima.remove();
//         _slideEnam(); // goes to the next slide
//       }, 1000);
//     });
//   })
//   .go();
// };

const _slideEnam = function () {
  const slideEnam = document.getElementById('slideEnam');
  const tapNote = slideEnam.querySelector('.tap-note');

  slideEnam.classList.remove('d-none');

  new TypeIt("#teks5", {
    strings: [
      "Happyyy Bornday Deepesh!!",
      " ",
      "Can’t believe we’ve been friends since day 1 ✨✨✨",
      " ",
      "Still remember those awkward “what’s your name, what year are you?” moments 😂",
      " ",
      "Lunch stories, Red Camp chaos, and all the laughs in between 💅💅💅",
      " ",
      "You’ve made it unforgettable! Thanks for always being there, buddy 💯",
      " ",
      "Now it’s time to slay 3.2, grab that shiny 4.0 GPA,",
      " ",
      "and shine bright like a diamond at RC 2025! 💎",
      " ",
      "Have the BEST birthday everrrr! 🎉🎂",
      " ",
      "- hui en aka mei nv"
    ],
    speed: 75,
    waitUntilVisible: true
  })
  
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideEnam.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideEnam.remove();
          _slideTujuh();
        }, 1000);
      });
    })
    .go();
};

const _slideTujuh = function () {
  const slideTujuh = document.getElementById('slideTujuh');
  const tapNote = slideTujuh.querySelector('.tap-note');

  slideTujuh.classList.remove('d-none');

  new TypeIt("#teks6", {
    strings: [
      "HI JAMES, HAPPIEST 19TH BIRTHDAY! 🎉",
      " ",
      "Wishing you the most happiest and sweetest 19th birthday ever 😍😍",
      " ",
      "Thank you for the fun memories together,",
      " ",
      "and I hope to have many more with you!!",
      "Good luck for your FINAL SEM and also RC ☺️☺️",
      " ",
      "ILY lots 💖 Have a great 19th birthday hehe",
      "yeowxian"
    ],
    speed: 75,
    waitUntilVisible: true
  })  
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideTujuh.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideTujuh.remove();
          _slideDelapan();
        }, 1000);
      });
    })
    .go();
};

const _slideDelapan = function () {
  const slideDelapan = document.getElementById('slideDelapan');
  const tapNote = slideDelapan.querySelector('.tap-note');

  slideDelapan.classList.remove('d-none');

  new TypeIt("#teks7", {
    strings: [
      "Janelle"
    ],
    speed: 75,
    waitUntilVisible: true
  })
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideDelapan.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideDelapan.remove();
          _slideSembilan();
        }, 1000);
      });
    })
    .go();
};

const _slideSembilan = function () {
  const slideSembilan = document.getElementById('slideSembilan');
  const tapNote = slideSembilan.querySelector('.tap-note');

  slideSembilan.classList.remove('d-none');

  new TypeIt("#teks8", {
    strings: [
      "Lakshana"
    ],
    speed: 75,
    waitUntilVisible: true
  })
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideSembilan.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          slideSembilan.remove();
          _slideSepuluhSatu();
        }, 1000);
      });
    })
    .go();
};

const _slideSepuluhSatu = function () {
  const slideSepuluhSatu = document.getElementById('slideSepuluhSatu');
  const tapNote = slideSepuluhSatu.querySelector('.tap-note');

  slideSepuluhSatu.classList.remove('d-none');

  new TypeIt("#teks10", {
    strings: [
      "HAPPY BIRTHDAY DEEPESHH!!!",
      "  ",
      "you’re truely an amazing guy and im so appreciative that you’re always so positive and hyped up!",
      "  ",
      "im forever thankful for the moments we have together just laughing and having fun, that’ll be something that i’d truly miss.",
      "  ",
      "have an amazing 19th birthday and never change that amazing smile on your face!!",
      " ",
      "with all the love in the world,",
      "yee heng"
    ],
    speed: 75,
    waitUntilVisible: true
  })
  .exec(() => {
    tapNote.classList.remove('d-none');
    tapNote.addEventListener('click', function () {
      slideSepuluhSatu.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tapNote.classList.add('d-none');
      setTimeout(function () {
        slideSepuluhSatu.remove();
        _slideSepuluh(); 
      }, 1000);
    });
  })
  .go();
};

const _slideSepuluh = function () {
  const slideSepuluh = document.getElementById('slideSepuluh');
  const tapNote = slideSepuluh.querySelector('.tap-note');

  slideSepuluh.classList.remove('d-none');

  new TypeIt("#teks9", {
    strings: [
      "And finally... the creator of this website.",
      " ",
      "This little project was built specially for you, to celebrate your 19th birthday in a way that's unforgettable.",
      " ",
      "Every animation, every word, and every slide was made with nothing but good vibes and appreciation for you.",
      " ",
      "Happy 19th Birthday, HB 🎉 May this year bring you endless laughter, growth, and memories that you’ll carry forever.",
      " ",
      "Talk soon, Cheers from Vietnam LOL",
      "- Morgen"
    ],
    speed: 75,
    waitUntilVisible: true
  })  
    .exec(() => {
      tapNote.classList.remove('d-none');
      tapNote.addEventListener('click', function () {
        slideSepuluh.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tapNote.classList.add('d-none');
        setTimeout(function () {
          _slideSebelas(); // continue your existing flow (Yes/No box)
          console.log("All slides finished!");
        }, 1000);
      });
    })
    .go();
};

// ============================================================
// SLIDE 11 (Yes/No Box)
// ============================================================
function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
};

const _slideSebelas = function () {
  const slideSebelas = document.getElementById('slideSebelas');
  const btn = document.getElementsByTagName('button');
  slideSebelas.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideSebelas);
    slideSebelas.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {
    slideSebelas.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideSebelas.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideSebelas.remove()
      setTimeout(() => {
        _slideDuabelas();
      }, 500);
    }, 1000);
  })
};

// ============================================================
// SLIDE 12 (Image + Thank You)
// ============================================================
const _slideDuabelas = function () {
  const slideDuabelas = document.getElementById('slideDuabelas');
  const trims = document.getElementById('trims');
  slideDuabelas.classList.remove('d-none');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideDuabelas.addEventListener('animationend', () => {
    slideDuabelas.classList.add('animate__delay-3s');
    slideDuabelas.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideDuabelas.remove();
        console.log("🎉 End of Website Slideshow!");
      }, 1000);
    }, 6000);
  });
};

// ============================================================
// SLIDE 13 (Final page)
// ============================================================
const _slideTigabelas = function () {
  const slideTigabelas = document.getElementById('slideTigabelas');
  slideTigabelas.classList.remove('d-none');
};
// ============================================================
// CLOWN PRANK TAP (global #tap)
// ============================================================
let tapCount = 0;

function handleTap() {
  tapCount++;

  const clown = document.getElementById('clownSlide');
  const tap = document.getElementById('tap');
  const music = document.getElementById('background-music'); // 🎵 main bg music

  // 🎵 Array of clown sounds
  const tapSounds = [
    document.getElementById('tap-sound1'),
    document.getElementById('tap-sound2'),
    document.getElementById('tap-sound3')
  ];

  function playRandomTapSound() {
    // stop/reset all first
    tapSounds.forEach(s => { s.pause(); s.currentTime = 0; });

    // pick one random
    const randomSound = tapSounds[Math.floor(Math.random() * tapSounds.length)];

    // 🔇 pause background music
    music.pause();

    // play the sound
    randomSound.play();

    // when it ends, resume music
    randomSound.onended = () => {
      music.play();
    };
  }

  if (tapCount === 1 || tapCount === 2) {
    music.pause();

    // Show clown
    clown.classList.add('show');
    setTimeout(() => {
      clown.classList.remove('show');
    }, 1500);

    // 🔊 Play random funny sound (music paused in function)
    playRandomTapSound();

    // Move the tap button again
    const randomX = Math.floor(Math.random() * 80) + 10;
    const randomY = Math.floor(Math.random() * 70) + 10;
    tap.style.left = randomX + "%";
    tap.style.top = randomY + "%";
    tap.style.bottom = "auto";
    tap.style.transform = "translate(-50%, -50%)";

  } else if (tapCount === 3) {
    // 🔇 Kill clown sounds
    stopAllClownSounds();
  
    // Resume bg music
    music.play();
  
    // Proceed
    _slideDua();
  }  
}

document.getElementById('tap').addEventListener('click', handleTap);

// ============================================================
// Extra typing for trims
// ============================================================
new TypeIt("#trims", {
  strings: ["Terimakasih."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();

'use strict';

var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000
  var isRunning = true

  setTimeout(() => {
    isRunning = false
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function () {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, 200 * random() | 0);
    },
    function () {
      return color(200 * random() | 0, 200, 200);
    },
    function () {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }


  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {

        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);


      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
};