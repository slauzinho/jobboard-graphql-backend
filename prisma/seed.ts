import { prisma } from '../src/generated/prisma-client';
import * as citiesSeed from './data/cities.data.json';
import * as categoriesSeed from './data/categories.data.json';
import * as tagsSeed from './data/tags.data.json';

function main() {
  citiesSeed.map(async citie => {
    try {
      await prisma.createCity(citie);
    } catch (e) {
      console.error(e);
    }
  });

  categoriesSeed.map(async category => {
    try {
      await prisma.createCategory(category);
    } catch (e) {
      console.error(e);
    }
  });

  tagsSeed.map(async tag => {
    try {
      await prisma.createTag(tag);
    } catch (e) {
      console.error(e);
    }
  });
}

main();
