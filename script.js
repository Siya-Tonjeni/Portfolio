document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('portfolio').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('portfolio').prepend(lists[lists.length - 1]);
}
