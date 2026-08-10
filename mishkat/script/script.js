document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const menuClose = document.getElementById("menu-close");
  
  // نحدد كل الروابط والأزرار داخل القائمة لكي تغلق القائمة عند الضغط عليها
  const menuLinks = navMenu.querySelectorAll("a");

  // فتح القائمة عند الضغط على زر الهامبرجر
  mobileMenuToggle.addEventListener("click", function () {
    navMenu.classList.add("active");
  });

  // إغلاق القائمة عند الضغط على زر (X)
  menuClose.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });

  // إغلاق القائمة تلقائياً عند الضغط على أي رابط أو زر بدااتها
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
    // Code for hero interactive features if needed
});




// 33333333333333
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#81CC33';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(0, 0, 0, 0.08)';
        });
    });
});





/* =========================================================
   GET VIDEO ELEMENTS
========================================================= */

const video =
    document.getElementById(
        "testimonialVideo"
    );

const playButton =
    document.getElementById(
        "videoPlayButton"
    );

const videoCard =
    document.querySelector(
        ".video-card"
    );


/* =========================================================
   PLAY VIDEO
========================================================= */

function playVideo() {

    if (!video) {
        return;
    }


    /*
        الفيديو يبدأ بدون صوت
        عند الـ Hover.

        السبب:
        أغلب المتصفحات تمنع
        Autoplay بالصوت.
    */

    video.muted = true;


    const playPromise =
        video.play();


    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(() => {

                videoCard.classList.add(
                    "is-playing"
                );

            })
            .catch((error) => {

                console.log(
                    "Video autoplay was blocked:",
                    error
                );

            });

    }

}


/* =========================================================
   PAUSE VIDEO
========================================================= */

function pauseVideo() {

    if (!video) {
        return;
    }


    video.pause();


    /*
        نرجع لأول الفيديو.
    */

    video.currentTime = 0;


    videoCard.classList.remove(
        "is-playing"
    );

}


/* =========================================================
   MOUSE ENTER
========================================================= */

/*
    أول ما الماوس يدخل
    على منطقة الفيديو
    يبدأ الفيديو.
*/

video.addEventListener(
    "mouseenter",
    () => {

        playVideo();

    }
);


/* =========================================================
   MOUSE LEAVE
========================================================= */

/*
    أول ما الماوس يخرج
    من الفيديو:
    الفيديو يتوقف
    ويرجع للبداية.
*/

video.addEventListener(
    "mouseleave",
    () => {

        pauseVideo();

    }
);


/* =========================================================
   PLAY BUTTON CLICK
========================================================= */

playButton.addEventListener(
    "click",
    () => {


        /* ================================================
           VIDEO IS PAUSED
        ================================================= */

        if (video.paused) {


            /*
                بما إن المستخدم ضغط بنفسه،
                نحاول تشغيل الصوت.
            */

            video.muted = false;


            const playPromise =
                video.play();


            if (
                playPromise !== undefined
            ) {

                playPromise
                    .then(() => {

                        videoCard.classList.add(
                            "is-playing"
                        );

                    })
                    .catch(() => {

                        /*
                            في حالة المتصفح
                            رفض التشغيل بالصوت،
                            نشغله بدون صوت.
                        */

                        video.muted = true;

                        video.play();

                        videoCard.classList.add(
                            "is-playing"
                        );

                    });

            }

        }


        /* ================================================
           VIDEO IS PLAYING
        ================================================= */

        else {

            video.pause();

            videoCard.classList.remove(
                "is-playing"
            );

        }

    }
);


/* =========================================================
   CLICK DIRECTLY ON VIDEO
========================================================= */

video.addEventListener(
    "click",
    () => {


        /* ================================================
           PLAY
        ================================================= */

        if (video.paused) {

            video.muted = false;


            video.play()
                .then(() => {

                    videoCard.classList.add(
                        "is-playing"
                    );

                })
                .catch(() => {

                    /*
                        fallback
                    */

                    video.muted = true;

                    video.play();

                    videoCard.classList.add(
                        "is-playing"
                    );

                });

        }


        /* ================================================
           PAUSE
        ================================================= */

        else {

            video.pause();

            videoCard.classList.remove(
                "is-playing"
            );

        }

    }
);


/* =========================================================
   VIDEO ENDED
========================================================= */

video.addEventListener(
    "ended",
    () => {

        video.currentTime = 0;

        videoCard.classList.remove(
            "is-playing"
        );

    }
);


/* =========================================================
   RIGHT ARROW
========================================================= */

const arrowRight =
    document.getElementById(
        "arrowRight"
    );


arrowRight.addEventListener(
    "click",
    () => {

        console.log(
            "Right arrow clicked"
        );

    }
);


/* =========================================================
   LEFT ARROW
========================================================= */

const arrowLeft =
    document.getElementById(
        "arrowLeft"
    );


arrowLeft.addEventListener(
    "click",
    () => {

        console.log(
            "Left arrow clicked"
        );

    }
);


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");

        questionButton.addEventListener("click", () => {
            // تحقق إذا كان العنصر الحالي مفتوحاً بالفعل
            const isActive = item.classList.contains("active");

            // (اختياري) إذا كنت تريد إغلاق الباقي وفتح واحد فقط، فعّل هذا السطر:
            // faqItems.forEach(el => el.classList.remove("active"));

            // تبديل الحالة الحالية (فتح/إغلاق)
            if (!isActive) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});

document.getElementById('current-year').textContent = new Date().getFullYear();