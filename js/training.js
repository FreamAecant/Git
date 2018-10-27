var temp={
    inner: undefined,
    onclick: undefined,
    onmouseout: undefined
};
function goBig(id){
    temp.inner = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML="hfhffjghj";
    document.getElementById(id).setAttribute("onmouseout","goBack(this.id)");
    document.getElementById(id).removeAttribute("onclick","undefined");
    return;
}
function goBack(id){
    document.getElementById(id).removeAttribute("onmouseout");
    document.getElementById(id).setAttribute("onclick","goBig(this.id)");
    document.getElementById(id).innerHTML=temp.inner;
    return;
}