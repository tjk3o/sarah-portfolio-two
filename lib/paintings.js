import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const paintingsDirectory = path.join(process.cwd(), 'paintings');

export function getAllPaintingIds() {
  const fileNames = fs.readdirSync(paintingsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        painting: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllPaintingsData() {
  const fileNames = fs.readdirSync(paintingsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(paintingsDirectory, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const id = fileName.replace(/\.md$/, '');
    return {
      id,
      ...matterResult.data,
    };
  });
}

export function getPaintingsByCategory(category) {
  const allPaintingsData = getAllPaintingsData();

  return allPaintingsData.filter((painting) =>
    painting.category.includes(category)
  );
}

export function getPaintingData(id) {
  const fullPath = path.join(paintingsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
