const POSITION_VISIBLE = 80;

export const RevealElement = (className: string, activeClassName: string) => {
  const reveals = document.querySelectorAll(`.${className}`);

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = POSITION_VISIBLE;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(activeClassName);
    } else {
      reveals[i].classList.remove(activeClassName);
    }
  }
};

export const ScrollRevealElement = (
  className: string,
  activeClassName: string
) => {
  // Trigger reveal when the page loads
  const revealOnLoad = () => RevealElement(className, activeClassName);

  // Ensure it triggers on load and on scroll
  window.addEventListener("DOMContentLoaded", revealOnLoad);
  window.addEventListener("load", revealOnLoad);
  window.addEventListener("scroll", () => {
    RevealElement(className, activeClassName);
  });

  requestAnimationFrame(revealOnLoad);
};
