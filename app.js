function myFunction(id) {
    document.getElementById(id).classList.toggle("show");

    var dropdowns = document.getElementsByClassName("header-right-bar-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id != id && openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function ocultarMensagens(id) {
    var container = document.getElementsByClassName(id)[0].getElementsByClassName('group-bar-chat')[0];
    var svgDown = document.getElementsByClassName(id)[0].getElementsByTagName('svg')[0];
    var svgRight = document.getElementsByClassName(id)[0].getElementsByTagName('svg')[1];
    if (container.style.display == '') {
        container.style.display = 'none';
        svgDown.style.display = 'none';
        svgRight.style.display = 'block';
    }
    else {
        container.style.display = '';
        svgDown.style.display = 'block';
        svgRight.style.display = 'none';
    }
}

$(document).ready(function () {
    var el = document.getElementById('chat-container-footer-messagebox');
    var container = document.getElementById('chat-container-footer');
    el.style.height = el.setAttribute('style', 'height: auto;');
    container.style.height = `${el.scrollHeight + 25}px`;
    el.classList.add('auto');
    el.addEventListener('input', e => {
        if(e.target.rows > 1)
            el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
        container.style.height = (el.scrollHeight + 25) + 'px';
     });
    });


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.header-right-bar-dropbtn') && !event.target.matches('.header-right-bar-dropbtn-user') && !event.target.matches('path') && !event.target.matches('svg') && !event.target.matches('circle')) {
        var dropdowns = document.getElementsByClassName("header-right-bar-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}