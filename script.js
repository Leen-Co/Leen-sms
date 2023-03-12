let d = new Date();
let n = d.getFullYear('Y');
document.getElementById('year').innerHTML = n;

function _(x){
    return document.getElementById(x);
}
SelValue = () => {
    let selectElement = document.querySelector('#selSchType');
    output = selectElement.value;
    return output;
}
SelOps = () => {
    let selectElement = document.querySelector('#opsSel');
    output = selectElement.value;
    
    //_('here').innerHTML = output;
    
    if(output != 'default'){
        _(output).style.display = "block";
    }
    else{ 
       // _('course').innerHTML = output;
    }
}
loadContents = () => {
    _('logForm').style.display = 'none';
    _('signBtn').style.display = 'none';
    _('schId').style.display = 'none';
    _('signBtnhr').style.display = 'none';
    _('logMailhr').style.display = 'none';
}
ShowLogForm = () => {
    _('signForm').style.display = 'none';
    _('logForm').style.display = 'block';
}
ShowRegBtn = () => {
    let tr = _('checkTerms').checked;
    if(tr == true){
        _('signBtn').style.display = 'block';
        _('signBtnhr').style.display = 'block';
    }else{
        _('signBtn').style.display = 'none';
        _('signBtnhr').style.display = 'none';
    }
}
ShowIdBox = () => {
    let tr = _('logTypeSel').checked;
    if(tr == true){
        _('schId').style.display = 'block';
        _('logMail').style.display = 'none';
    }else{
        _('schId').style.display = 'none';
        _('logMail').style.display = 'block';
    }
}
IsAlNum = (str) => {
    let code, i, len;
    len = str.length;
    i = 0;
        
    for(i; i < len; i++){
        code = str.charCodeAt(i);
        if(!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)){
            return false;
        } 
    }
    return true;
}

RegUser = () => {
    let e, ph, s, p, id, del, rdn;
    
    e = _('email').value;
    ph = _('phone').value;
    s = _('schName').value;
    p = _('pass').value;
    
    if(e == 0){_('emailSpan').innerHTML = 'Enter email address'; _('emailSpan').style.color = 'Red';}
    if(ph == 0){_('phoneSpan').innerHTML = 'Enter phoneNumber'; _('phoneSpan').style.color = 'Red';}
    if(s == 0){_('schNameSpan').innerHTML = 'Enter school name'; _('schNameSpan').style.color = 'Red';}
    if(p == 0){_('passSpan').innerHTML = 'Create password'; _('passSpan').style.color = 'Red';}else if(p.length < 8){_('passSpan').innerHTML = 'Password must be at least eight characters long'; _('passSpan').style.color = 'Red';}else if(p.length >= 8){
        const myVar = s;
        localStorage.setItem("userVar", s);
        location.href = 'home.html';
    }
}

/*****Home*****/
let addStaffBtn = _('addStaffBtn');
addStaffBtn.addEventListener("click", ShowAddStaffForm);

function ShowAddStaffForm(){_('addStaffForm').style.display = "block";}

let addStdBtn = _('addStdBtn');
addStdBtn.addEventListener("click", ShowAddStdForm);

function ShowAddStdForm(){_('addStdForm').style.display = "block";}
