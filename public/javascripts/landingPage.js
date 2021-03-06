const $backendHero = $("#backend-hero-image");
const $backendIntro = $("#backend-hero-intro");
const $backendHeroSection = $("#backend-hero");

const $frontendHero = $("#frontend-hero-image");
const $frontendIntro = $("#frontend-hero-intro");

$(document).ready(() => {
    $backendHero.on('mouseover', () => {
        $backendIntro.fadeIn(1200);
    });
    $backendHero.on('mouseleave', () => {
        $backendIntro.hide();
    });

    $frontendHero.on('mouseover', () => {
        $frontendIntro.fadeIn(1200);
    });
    $frontendHero.on('mouseleave', () => {
        $frontendIntro.hide();
    });
});

