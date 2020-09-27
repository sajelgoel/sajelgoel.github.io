function changeView(page){
    if(page=='profile'){
        document.getElementById('profile').style.display='block'
        document.getElementById('project').style.display='none'
        document.getElementById('contact').style.display='none'
    }else if(page=='project'){
        document.getElementById('profile').style.display='none'
        document.getElementById('project').style.display='block'
        document.getElementById('contact').style.display='none'
    }else if(page=='contact'){
        document.getElementById('profile').style.display='none'
        document.getElementById('project').style.display='none'
        document.getElementById('contact').style.display='block'
    }

}

document.getElementById('profile').style.display='block'
document.getElementById('project').style.display='none'
document.getElementById('contact').style.display='none'