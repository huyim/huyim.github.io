$('[lang="zh"]').hide();

$("#switch-lang-en").click(function () {
  $('[lang="zh"]').hide();

  $('[lang="en"]').show();
});

$("#switch-lang-zh").click(function () {
  $('[lang="en"]').hide();

  $('[lang="zh"]').show();
});
