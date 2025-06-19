document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about-section");
  const aboutText = `> Bio

Hi! I'm Suraj, a Computer Science student from India with a passion for development.
I have solid knowledge of frontend technologies like HTML, CSS, and JavaScript.

I also have backend experience with Java, JSP, and Servlets, and I'm skilled
at SQL and JDBC for database management. I'm passionate about building full-stack
applications and improving every day!`;

  function typeWriter(element, text, i = 0) {
    if (i === 0) {
      element.innerHTML = `<p class="command"></p>`;
    }

    const targetP = element.querySelector("p:last-of-type");

    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        element.innerHTML += "<p></p>";
      } else {
        targetP.innerHTML += text.charAt(i);
      }

      setTimeout(() => typeWriter(element, text, i + 1), 25);
    }
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".terminal-body[id]");

  function changeActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  const themeToggleButton = document.getElementById("theme-toggle");
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !aboutSection.hasAttribute("data-typed")) {
        typeWriter(aboutSection, aboutText);
        aboutSection.setAttribute("data-typed", "true");
      }
    });
  }, { threshold: 0.5 });

  observer.observe(aboutSection);
});
