 let outputshow=document.getElementById("show")
        function numbers(num){
            outputshow.value +=num;
        }
        function del(){
            outputshow.value=outputshow.value.slice(0,-1);
        }
        function sum(){
            try{
                outputshow.value=eval(outputshow.value)
            }
            catch{
                alert("invalid")
            }
        }
       function remove() {
           outputshow.value = "";
}
