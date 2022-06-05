var raw = require("choo/html/raw");
var markdown = require("markdown-it");
const fs = require("fs");
var md = markdown({
  html: true,
});
var hljs = require("highlight.js");
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);

function highlighter(md, opts) {
  md.options.highlight = highlight;
  var rules = md.renderer.rules;
  rules.fence = wrap(rules.fence);
  rules.code_block = wrap(rules.code_block);

  function highlight(code, lang) {
    console.log("HIGHLIGHT!!:", lang);
    var result = null;
    if (lang && hljs.getLanguage(lang)) {
      result = hljs.highlight(code, { language: lang });
    } else {
      result = hljs.highlightAuto(code);
    }
    return result ? result.value : "";
  }

  function wrap(render) {
    return function () {
      return render
        .apply(this, arguments)
        .replace(/<code class="/g, '<code class="hljs ')
        .replace(/<code>/g, '<code class="hljs">');
    };
  }
}
md.use(highlighter);

function format(string) {
  string = `# CODE START\n\n\`\`\`javascript\n${string}\`\`\`\n### END OF CODE`;
  return raw(md.render(string));
}

module.exports = exports = format;
