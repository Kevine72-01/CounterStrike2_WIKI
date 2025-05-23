document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.weapon a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.weapon a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


