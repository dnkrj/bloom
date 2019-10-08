function hashCode (str){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash % 3;
}

let answers = "";
$("section p").on("click", (event) => {
  answers += event.target.dataset.key;
  $(event.target.parentElement).fadeOut(700);
  $("h1").hide();
  $("h1").filter("." + hashCode(answers)).show();
});