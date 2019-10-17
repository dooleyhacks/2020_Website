function resize() {
    var img = document.getElementsByTagName('video'); 

    var w = window.innerWidth;
    var h = window.innerHeight;
    //console.log(w);
    //console.log(h);

    for (i = 0; i < img.length; i++) { 
        var ratio = (img[i].clientHeight / img[i].clientWidth);
        if (img[i].clientHeight > h && img[i].clientWidth < w) {
            img[i].style.height = h + "px";
            img[i].style.width = (h / ratio) + "px";
        }
        if (img[i].clientHeight <= h && img[i].clientWidth < w && ratio > 1) {
            img[i].style.height = h + "px";
            img[i].style.width = (h / ratio) + "px";
        }
        if (img[i].clientWidth >= w) {
            img[i].style.width = w + "px";
        }
        if (img[i].clientHeight < h && img[i].clientWidth <= w  && ratio < 1) {
            img[i].style.width = w + "px";
        }
    }
}

resize();
window.onresize = resize;