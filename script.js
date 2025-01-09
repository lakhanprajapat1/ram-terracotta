var togle=document.querySelector('#togle');
var togleMenu=document.querySelector('.nav-togle')
var check=0
togle.addEventListener('click',()=>{
    if(check==0){
        togleMenu.style.display='block';
        check=1;
    }else{
        check==1;
        togleMenu.style.display='none';
        check=0;
    }
    
})