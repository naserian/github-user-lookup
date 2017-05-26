$(document).ready(function() {
  $('#search').click(function() {
    $('github-user-information').empty();
    var userSearch = $('#input').val();
    return  user.getRepos(userSearch);
  });
});

$('.githubUser').click(function(){
  getRepos(input);
});
