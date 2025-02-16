import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve(process.cwd(), 'src/assets/img/blog-author.jpg');
const outputPath = path.resolve(process.cwd(), 'src/assets/img/blog-author-200.png');

// Ensure the input file exists
if (!fs.existsSync(inputPath)) {
    console.error(`Input file does not exist: ${inputPath}`);
    process.exit(1);
}

sharp(inputPath)
    .resize(200, 200, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy
    })
    .png()
    .composite([{
        input: Buffer.from(`<svg><circle cx="100" cy="100" r="100"/></svg>`),
        blend: 'dest-in'
    }])
    .toFile(outputPath)
    .then(() => {
        console.log(`Image resized and cropped to 200x200 pixels and saved to ${outputPath}`);

        const outputPath2 = path.resolve(process.cwd(), 'src/lib/blog-author.ts');
        const base64 = fs.readFileSync(outputPath).toString('base64');
        const content = `export const authorImage = 'data:image/png;base64,${base64}';\n`;
        fs.writeFileSync(outputPath2, content);

        console.log(`Base64 encoded image saved to ${outputPath2}`);

        fs.rmSync(outputPath);

    })
    .catch(err => {
        console.error(`Error resizing image: ${err.message}`);
    });
