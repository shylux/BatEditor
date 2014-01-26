$(function() {
  // initialize codemirror
  var textarea = $('textarea[name="code"').get(0);
  
  cm = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java",
    theme: "eclipse"
  });

  $(textarea).after(theme_chooser);
  if (localStorage.getItem("bateditor_theme") != null) {
    var theme = localStorage.getItem("bateditor_theme");
    cm.setOption("theme", theme);
    $("#bateditor_select").val(theme);
  }
  
  $("#bateditor_select").on("change", function () {
    var theme = $("#bateditor_select option:selected").text(); 
    cm.setOption("theme", theme);
    localStorage.setItem("bateditor_theme", theme);
  });

  // sync codemirror and original textarea
  cm.on("change", function(instance, changeObj) {
    $('textarea[name="code"').val(cm.getValue());
  });

});

var theme_chooser = '\
<p>Select a theme: <select id="bateditor_select">\
    <option>3024-day</option>\
    <option>3024-night</option>\
    <option>ambiance</option>\
    <option>base16-dark</option>\
    <option>base16-light</option>\
    <option>blackboard</option>\
    <option>cobalt</option>\
    <option selected>eclipse</option>\
    <option>elegant</option>\
    <option>erlang-dark</option>\
    <option>lesser-dark</option>\
    <option>mbo</option>\
    <option>mdn-like</option>\
    <option>midnight</option>\
    <option>monokai</option>\
    <option>neat</option>\
    <option>night</option>\
    <option>paraiso-dark</option>\
    <option>paraiso-light</option>\
    <option>pastel-on-dark</option>\
    <option>rubyblue</option>\
    <option>solarized dark</option>\
    <option>solarized light</option>\
    <option>the-matrix</option>\
    <option>tomorrow-night-eighties</option>\
    <option>twilight</option>\
    <option>vibrant-ink</option>\
    <option>xq-dark</option>\
    <option>xq-light</option>\
</select>\
</p>\
';
