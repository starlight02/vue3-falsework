const fs = require('fs-extra');

const arguments = process.argv.splice(2);
const dirArr = ['assets', 'components', 'views'];
const configArr = ['apis', 'routes'];
let content = '';

fs.mkdirSync(`src/modules/${arguments}`);
dirArr.forEach(item => fs.mkdirSync(`src/modules/${arguments}/${item}`));
configArr.forEach((item, idx) => {
    switch (idx) {
        case 0:
            content = 'export default {}';
            break;
        case 1:
            content = 'export default []';
            break;
    }
    fs.writeFileSync(`src/modules/${arguments}/${item}.js`, content);
});
// fs.writeFileSync(`mock/${arguments}.js`, 'module.exports = {}');
