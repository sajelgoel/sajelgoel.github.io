function changeView(page){
    if(page=='profile'){
        document.getElementById('profile').style.display='block'
        document.getElementById('project').style.display='none'
        document.getElementById('contact').style.display='none'
        document.getElementById('list-profile').classList.add('active');
        document.getElementById('list-project').classList.remove('active');
        document.getElementById('list-contact').classList.remove('active');
    }else if(page=='project'){
        document.getElementById('profile').style.display='none'
        document.getElementById('project').style.display='block'
        document.getElementById('contact').style.display='none'
        document.getElementById('list-profile').classList.remove('active');
        document.getElementById('list-project').classList.add('active');
        document.getElementById('list-contact').classList.remove('active');
    }else if(page=='contact'){
        document.getElementById('profile').style.display='none'
        document.getElementById('project').style.display='none'
        document.getElementById('contact').style.display='block'
        document.getElementById('list-profile').classList.remove('active');
        document.getElementById('list-project').classList.remove('active');
        document.getElementById('list-contact').classList.add('active');
    }

}

document.getElementById('profile').style.display='block'
document.getElementById('project').style.display='none'
document.getElementById('contact').style.display='none'
document.getElementById('main-content').style.display='block'