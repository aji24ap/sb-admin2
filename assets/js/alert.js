const alertMessage = document.querySelector('#info-pembuat');
if(alertMessage){
    Swal.fire({
        icon    :  'info',
        title   :  '<strong>INFO</strong>',
        html    :  'Script ini dibuat oleh <a href="https://www.instagram.com/ajilh24/">Ilham Wahyu Aji</a>.' + 
                   ' Terinspirasi dari SB Admin 2, dan dibuat ulang dengan menggunakan Bootstrap 5.2.3',
        timer: 7700
    })
}