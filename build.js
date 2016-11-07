System.register("package.json!github:systemjs/plugin-json@0.2.1/json.js", [], function (_export, _context) {
  "use strict";

  var __useDefault, name, version, description, main, scripts, author, license, dependencies, jspm;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("name", name = "plugin-json-test");

      _export("name", name);

      _export("version", version = "1.0.0");

      _export("version", version);

      _export("description", description = "");

      _export("description", description);

      _export("main", main = "index.js");

      _export("main", main);

      _export("scripts", scripts = { "test": "echo \"Error: no test specified\" && exit 1" });

      _export("scripts", scripts);

      _export("author", author = "");

      _export("author", author);

      _export("license", license = "MIT");

      _export("license", license);

      _export("dependencies", dependencies = { "jspm": "beta" });

      _export("dependencies", dependencies);

      _export("jspm", jspm = { "name": "plugin-json-test", "main": "plugin-json-test.js", "dependencies": { "json": "github:systemjs/plugin-json@^0.2.1" }, "devDependencies": { "plugin-babel": "npm:systemjs-plugin-babel@^0.0.17" } });

      _export("jspm", jspm);

      _export("default", {
        name: name,
        version: version,
        description: description,
        main: main,
        scripts: scripts,
        author: author,
        license: license,
        dependencies: dependencies,
        jspm: jspm
      });
    }
  };
});
System.registerDynamic("github:systemjs/plugin-json@0.2.1.json", [], false, function() {
  return {
    "main": "json"
  };
});

System.register("array.json!github:systemjs/plugin-json@0.2.1/json.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", {
        "0": 1,
        "1": 2,
        "2": 3
      });
    }
  };
});
System.register('test.js', ['package.json!', 'array.json!'], function (_export, _context) {
  "use strict";

  var pkg, arr;
  return {
    setters: [function (_packageJson) {
      pkg = _packageJson.default;
    }, function (_arrayJson) {
      arr = _arrayJson.default;
    }],
    execute: function () {

      console.log('arr', arr);
    }
  };
});
//# sourceMappingURL=build.js.map