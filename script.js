console.log("It's working")

let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let ThemDots = document.getElementsByClassName('theme-dot')

for(var i=0; ThemDots.length > i; i++){
    ThemDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Cliked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}