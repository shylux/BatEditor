$(function() {
  var test = $('textarea[name="code"').get(0);
  CodeMirror.fromTextArea(test, {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java",
	theme: "ambiance"
  });
});
