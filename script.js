document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll("section, header");
  
    elementos.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`;
    });
  
    setTimeout(() => {
      elementos.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 100);
  });
  