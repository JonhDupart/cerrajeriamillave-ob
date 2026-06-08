import sharp from "sharp";
import { existsSync } from "node:fs";

const tasks = [
  {
    input: "public/logomillave.png",
    output: "public/logomillave-160.webp",
    width: 160,
    quality: 82,
  },
  {
    input: "public/portada-millave.jpg",
    output: "public/portada-millave-1440.webp",
    width: 1440,
    quality: 76,
  },
  {
    input: "public/porquemillave.jpg",
    output: "public/porquemillave-900.webp",
    width: 900,
    quality: 76,
  },
  {
    input: "public/cobertura-Cerrajería-mi-llave-ob.jpg",
    output: "public/cobertura-cerrajeria-mi-llave-ob-900.webp",
    width: 900,
    quality: 76,
  },
];

for (const task of tasks) {
  if (!existsSync(task.input)) {
    console.warn(`No existe: ${task.input}`);
    continue;
  }

  await sharp(task.input)
    .resize({
      width: task.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: task.quality,
      effort: 6,
    })
    .toFile(task.output);

  console.log(`Optimizada: ${task.output}`);
}