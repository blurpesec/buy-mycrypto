"use strict";

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var _slash = _interopRequireDefault(require("slash"));

var _isRelativeUrl = _interopRequireDefault(require("is-relative-url"));

var _himalaya = require("himalaya");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Recursively loop over an object with children, to get all the children of a specific type. This
 * will keep the original reference to an object. Returns an array of all nodes with the given type.
 *
 * @template T
 * @param {T} node
 * @param {string} type
 * @returns {T[]}
 */
var getNodes = function getNodes(node, type) {
  var output = [];

  if (node.type === type) {
    output.push(node);
  }

  if (node.children) {
    node.children.forEach(function (child) {
      return output.push.apply(output, _toConsumableArray(getNodes(child, type)));
    });
  }

  return output;
};

module.exports = function (_ref) {
  var files = _ref.files,
      markdownAST = _ref.markdownAST,
      markdownNode = _ref.markdownNode,
      pathPrefix = _ref.pathPrefix,
      getNode = _ref.getNode;
  var imageNodes = getNodes(markdownAST, 'image');
  var htmlNodes = getNodes(markdownAST, 'html');
  var parentNode = getNode(markdownNode.parent);

  if (!parentNode || !parentNode.dir) {
    return Promise.resolve();
  }
  /**
   * Get a file node from a (relative) file url. Returns undefined if the file could not be found.
   *
   * @param {string} url
   */


  var getFileNode = function getFileNode(url) {
    var imagePath = (0, _slash.default)(path.resolve(parentNode.dir, url));
    return files.find(function (file) {
      return file.absolutePath === imagePath;
    });
  };
  /**
   * Copy an image from the original directory to Gatsby's output folder.
   *
   * @param {string} imagePath
   * @param {string} outputPath
   */


  var processImage = function processImage(imagePath, outputPath) {
    return new Promise(function (resolve, reject) {
      if (!fs.existsSync(outputPath)) {
        var readStream = fs.createReadStream(imagePath);
        var writeStream = fs.createWriteStream(outputPath);
        readStream.on('error', reject);
        writeStream.on('error', reject);
        writeStream.on('close', resolve);
        readStream.pipe(writeStream);
      } else {
        resolve();
      }
    });
  };
  /**
   * Process all image nodes.
   *
   * @param {MarkdownNode[]} nodes
   */


  var processImageNodes = function processImageNodes(nodes) {
    return Promise.all(nodes.map(function (node) {
      if (!(0, _isRelativeUrl.default)(node.url)) {
        return Promise.resolve();
      }

      var fileNode = getFileNode(node.url);

      if (!fileNode) {
        return Promise.resolve();
      }

      var imageName = "".concat(fileNode.name, "-").concat(fileNode.internal.contentDigest, ".").concat(fileNode.extension);
      var imagePath = path.resolve(process.cwd(), 'public/static', imageName);
      node.url = (0, _slash.default)(path.join(pathPrefix || '/', 'static', imageName));
      return processImage(fileNode.absolutePath, imagePath);
    }));
  };
  /**
   * Process all HTML nodes, by parsing the HTML and searching for any images.
   *
   * @param {MarkdownNode[]>} nodes
   */


  var processHtmlNodes = function processHtmlNodes(nodes) {
    return Promise.all(_toConsumableArray(nodes.map(function (node) {
      var htmlASTNodes = (0, _himalaya.parse)(node.value);
      var promises = [];
      htmlASTNodes.forEach(function (htmlAST) {
        var htmlImageNodes = getNodes(htmlAST, 'element').filter(function (element) {
          return element.tagName === 'img';
        });
        htmlImageNodes.forEach(function (imageNode) {
          var src = imageNode.attributes.find(function (attribute) {
            return attribute.key === 'src';
          });

          if (!src) {
            return Promise.resolve();
          }

          if (!(0, _isRelativeUrl.default)(src.value)) {
            return Promise.resolve();
          }

          var fileNode = getFileNode(src.value);

          if (!fileNode) {
            return Promise.resolve();
          }

          var imageName = "".concat(fileNode.name, "-").concat(fileNode.internal.contentDigest, ".").concat(fileNode.extension);
          var imagePath = path.resolve(process.cwd(), 'public/static', imageName);
          src.value = (0, _slash.default)(path.join(pathPrefix || '/', 'static', imageName));
          promises.push(processImage(fileNode.absolutePath, imagePath));
        });
      });

      if (promises.length) {
        node.value = (0, _himalaya.stringify)(htmlASTNodes);
      }

      return promises;
    })));
  };

  return Promise.all([processImageNodes(imageNodes), processHtmlNodes(htmlNodes)]);
};