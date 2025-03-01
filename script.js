// togel kelas aktif
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {


navbarNav.classList.toggle('active');

};

// ketika hamburger diklik diluar sidebar untuk menghilangkan nav nya (isinya)

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(a){
    if(!hamburger.contains(a.target) && !navbarNav.contains(a.target))
        navbarNav.classList.remove('active');

});