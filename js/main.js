function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '0px';
    }
}

function generateCopyright() {
    var currentYear = new Date().getFullYear();
    var copyrightNotice = "&copy; " + currentYear + " Youssef Wahba All rights reserved.";
    document.getElementById("copyright").innerHTML = copyrightNotice;
}