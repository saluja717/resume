const fun = ()=>
{
	setTimeout(()=>{
       f1();
	},5000);
	
}
function f1() {
	window.location.href=("First_page.html");
}