import { PrismaClient } from '@prisma/client';const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: 0,
    numberOfImages: 12,
    publishedDate: new Date(),
    manga: {
      connect: {
        name: 'Solo Leveling',
      },
    },
  },
});

const images = [
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/01.webp', order: 1 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/02.webp', order: 2 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/03.webp', order: 3 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/04.webp', order: 4 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/05.webp', order: 5 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/06.webp', order: 6 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/07.webp', order: 7 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/08.webp', order: 8 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/09.webp', order: 9 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/10.webp', order: 10 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/11.webp', order: 11 },
  { url: 'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/Zero/12.webp', order: 12 },
];

await prisma.image.createMany({
  data: images.map((image) => ({
    url: image.url,
    order: image.order,
    chapterId: chapter.id,
  })),
});
const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: 1,
    numberOfImages: 22,
    publishedDate: new Date(),
    manga: {
      connect: {
        name: 'Solo Leveling',
      },
    },
  },
});

const images = [
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/01.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/02.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/03.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/04.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/05.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/06.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/07.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/08.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/09.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/10.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/11.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/12.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/13.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/14.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/15.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/16.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/17.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/18.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/19.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/20.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/21.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/1/22.webp',
];

for (let i = 0; i < images.length; i++) {
  await prisma.image.create({
    data: {
      url: images[i],
      order: i + 1,
      chapter: {
        connect: {
          id: chapter.id,
        },
      },
    },
  });
}
const chapterData = {
  chapterNumber: 2,
  numberOfImages: 19,
  publishedDate: new Date("2025-04-01T00:00:00Z"),
  mangaId: 1, // Replace with the correct mangaId
};

const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: chapterData.chapterNumber,
    numberOfImages: chapterData.numberOfImages,
    publishedDate: chapterData.publishedDate,
    mangaId: chapterData.mangaId,
  },
});

const imageUrls = [
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/01.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/02.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/03.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/04.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/05.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/06.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/07.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/08.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/09.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/10.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/11.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/12.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/13.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/14.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/15.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/16.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/17.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/18.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/2/19.webp",
];

for (let i = 0; i < chapterData.numberOfImages; i++) {
  await prisma.image.create({
    data: {
      url: imageUrls[i],
      order: i + 1,
      chapterId: chapter.id,
    },
  });
}
const chapterData = {
  chapterNumber: 3.0,
  numberOfImages: 27,
  publishedDate: new Date("2025-04-01"),
  mangaId: 1 // Replace with actual mangaId
};

// Insert chapter
const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: chapterData.chapterNumber,
    numberOfImages: chapterData.numberOfImages,
    publishedDate: chapterData.publishedDate,
    mangaId: chapterData.mangaId,
  }
});

// Image URLs
const imageUrls = [
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/01.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/02.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/03.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/04.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/05.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/06.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/07.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/08.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/09.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/10.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/11.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/12.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/13.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/14.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/15.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/16.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/17.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/18.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/19.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/20.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/21.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/22.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/23.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/24.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/25.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/26.webp',
  'https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/3/27.webp'
];

// Insert images
const images = await prisma.image.createMany({
  data: imageUrls.map((url, index) => ({
    url,
    order: index + 1,
    chapterId: chapter.id
  }))
});
// Insert a new chapter
const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: 4,
    numberOfImages: 27,
    publishedDate: new Date('2025-04-01'),
    manga: {
      connect: { id: mangaId } // Assuming mangaId is provided dynamically
    }
  }
});

// Insert related images for the chapter
const imageUrls = [
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/01.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/02.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/03.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/04.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/05.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/06.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/07.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/08.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/09.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/10.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/11.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/12.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/13.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/14.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/15.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/16.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/17.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/18.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/19.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/20.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/21.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/22.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/23.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/24.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/25.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/26.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/4/27.webp"
];

await Promise.all(
  imageUrls.map((url, index) =>
    prisma.image.create({
      data: {
        url: url,
        order: index + 1,
        chapter: {
          connect: { id: chapter.id }
        }
      }
    })
  )
);
const chapterData = {
  chapterNumber: 5,
  numberOfImages: 26,
  publishedDate: new Date('2025-04-01'),
  mangaId: 1, // Replace with actual mangaId
};

const imageUrls = [
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/01.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/02.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/03.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/04.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/05.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/06.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/07.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/08.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/09.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/10.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/11.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/12.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/13.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/14.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/15.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/16.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/17.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/18.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/19.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/20.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/21.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/22.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/23.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/24.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/25.webp",
  "https://asurascans.com.lv/wp-content/uploads/manga/solo-leveling/5/26.webp"
];

const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: chapterData.chapterNumber,
    numberOfImages: chapterData.numberOfImages,
    publishedDate: chapterData.publishedDate,
    mangaId: chapterData.mangaId,
    images: {
      create: imageUrls.map((url, index) => ({
        url,
        order: index + 1
      }))
    }
  }
});
const chapter = await prisma.chapter.create({
  data: {
    chapterNumber: 9,
