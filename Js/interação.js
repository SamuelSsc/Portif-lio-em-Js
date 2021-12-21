const acordion = document.getElementsByClassName('acordion-item');

for (i = 0; i<acordion.length; i++){
    acordion[i].addEventListener('click',function(){
        this.classLists.toggle('active')
    })
}