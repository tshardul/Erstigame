document.getElementById('rules-link').addEventListener('click', function() {
    window.location.href = 'rules.html'; 
});

document.getElementById('app-link').addEventListener('click', function() {
    window.location.href = 'app.html'; 
});

document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

function toggleRule(rule) {
    var content = rule.nextElementSibling;
    content.classList.toggle("hidden");
  }


