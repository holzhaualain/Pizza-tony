
function modal(title, text) {
    document.getElementsByClassName('confirmBox-title')[0].innerHTML = title;
    document.getElementsByClassName('confirmBox-text')[0].innerHTML = text;
    document.getElementsByClassName('confirmBox')[0].classList.add( 'slide');
    setTimeout(function () {
        document.getElementsByClassName('confirmBox')[0].classList.remove( 'slide');

    },3000)
}