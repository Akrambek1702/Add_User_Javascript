document.querySelector('.btn-success').onclick = function(){
    let name = document.querySelector('#input1').value,
        age = document.querySelector('#input2').value,  
        job = document.querySelector('#input3').value,
        user = {
            ism: name,  
            yosh: age,
            kasb: job
        };

        if(name !== '' && age !== '' && job !== ''){
            document.querySelector('.ozimiz').innerHTML += '  <div class="col-3"><div class="card text-center"><div class="card-header"><img src="images.jpg" class="w-50" alt=""></div><div class="card-body">  <p class="display-6">'+ user.ism +'</p><p class="fs-5"> u '+ user.yosh +' yoshda </p> <p class="fs-5">'+ user.kasb +'</p></div></div></div>'
        } else {
            alert('inputni hammasini to`ldiring!');
        };

        document.querySelector('#input1').value = '';
        document.querySelector('#input2').value = null;
        document.querySelector('#input3').value = '';
}