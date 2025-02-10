document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.getElementById("marquee2");
    const marqueeContent = marquee.querySelector(".marquee2-content");
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    let scrollSpeed = 3; // Adjust scroll speed here
    let scrollPos = 0;

    function scrollMarquee() {
        scrollPos -= scrollSpeed;
        if (Math.abs(scrollPos) >= marqueeContent.offsetWidth) {
            scrollPos = 0; // Reset the scroll position
        }
        marquee.style.transform = `translateX(${scrollPos}px)`;
        requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
});

document.getElementById('audio-control').addEventListener('click', function() {
    var audio = document.getElementById('background-audio');
    var icon = document.getElementById('audio-icon');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});
 const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = 0;
                }
            });
        });