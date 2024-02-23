document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById('passwordForm');
    const htmlCode = document.getElementById('sil-widget-657eae3e8db849001e743a1d');
    let shiftPressedDuration = 0;

    passwordForm.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      const passwordInput = document.getElementById('password').value;
      if (passwordInput === 'minto') {
        htmlCode.style.display = 'block';
        passwordForm.style.display = 'none';
      } else {
        alert('err');
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Shift') {
        shiftPressedDuration = 0;
        const timer = setInterval(function() {
          shiftPressedDuration += 1000;
          if (shiftPressedDuration >= 2000) {
            passwordForm.style.display = 'block';
            clearInterval(timer);
          }
        }, 1000);
      }
    });

    document.addEventListener('keyup', function(event) {
      if (event.key === 'Shift') {
        shiftPressedDuration = 0;
      }
    });
  });