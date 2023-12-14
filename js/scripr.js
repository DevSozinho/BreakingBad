(()=>{
    {//
        var interval = 5000
       setInterval(()=>{ 
        let api = `https://api.breakingbadquotes.xyz/v1/quotes/100000`
            fetch(api).then(res => res.json()).then(respObj => {
                var obj = document.querySelector('div.container')
                anime({
                    targets: obj,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    easing: 'easeInOutQuad',
                    duration: 2000,
                })
                for(var i = 0;i < respObj.length;i++){
                    var author = respObj[i].author
                    var quotes = respObj[i].quote
                   if(author == 'Badger'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Badger" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Gustavo Fring'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Gustavo_Fring" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Hank Schrader'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Hank_Schrader" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Jesse Pinkman'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Jesse_Pinkman" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Mike Ehrmantraut'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Mike_Ehrmantraut" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Saul Goodman'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Saul_Goodman.jpg" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Skyler White'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Skyler_White" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'The fly'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/The_fly" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Tuco Salamanca'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Tuco_Salamanca" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }else if(author == 'Walter White'){
                        obj.innerHTML = `
                        <div class="mess">
                        <div class="img-profile"><img src="img/Walter_White" alt="${author}"></div><!--img-profile-->
                        <h3>${author}</h3>
                        <p>${quotes}</p>
                        </div><!--mess-->
                        `
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },interval)

        console.log('By DevSozinho')
    }//
})();