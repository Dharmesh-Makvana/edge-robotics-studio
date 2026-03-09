import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir);

let changeCount = 0;

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        let content = fs.readFileSync(path.join(dir, file), 'utf-8');

        // Restore blue RGB
        content = content.replace(/rgba\(255,0,0/g, 'rgba(14,165,233');

        // Restore slate colors
        content = content.replace(/teal-950/g, 'slate-900');
        content = content.replace(/teal-900/g, 'slate-800');
        content = content.replace(/teal-800/g, 'slate-700');
        content = content.replace(/teal-500/g, 'slate-500');
        content = content.replace(/teal-400/g, 'slate-400');
        content = content.replace(/teal-300/g, 'slate-300');

        fs.writeFileSync(path.join(dir, file), content);
        changeCount++;
    }
});

console.log(`Reverted ${changeCount} components back to blue and slate.`);
