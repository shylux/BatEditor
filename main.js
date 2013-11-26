$(function() {
  // initialize codemirror
  var textarea = $('textarea[name="code"').get(0);
  var cm = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java",
	theme: "solarized dark"
  });
  
  // sync codemirror and original textarea
  cm.on("change", function(instance, changeObj) {
	$('textarea[name="code"').val(cm.getValue());
  });
  
  // change to alternative theme
  document.onkeydown = function(event) {
	// CTRL + ALT + SHIFT + M
	if (event.which == 77 && event.shiftKey && event.ctrlKey && event.altKey) {
		var otherTheme = (cm.options.theme == "solarized dark") ? "the-matrix" : "solarized dark";
		cm.setOption("theme", otherTheme);
	}
  }
});
