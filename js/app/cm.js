$(document).ready(function() {
  var myCodeMirror = CodeMirror.fromTextArea($('#json')[0], {
    lineNumbers: true,
    matchBrackets: true,
    value: "function myScript(){return 100;}\n",
    mode:  {
      name: "javascript",
      json: true
    },
    tabSize: 2,
    indentWithTabs: false,
    lineWrapping: false,

    theme: "monokai",
    viewportMargin: Infinity
  });
});