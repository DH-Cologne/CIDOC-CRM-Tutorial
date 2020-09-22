import Kapitel from 'kapiteljs';
import cidocCrmChapters from './CIDOC-CRM-Chapters.json';

const videoElement = document.getElementById('tutorial') as HTMLVideoElement;
const container = document.getElementById(
  'kapitel-container',
) as HTMLDivElement;
const slideImage = document.getElementById('slide-image') as HTMLImageElement;

if (videoElement && container) {
  const kapitel = new Kapitel(videoElement, container);
  kapitel.addChapters(cidocCrmChapters);
  kapitel.$currentChapter.subscribe(chapter => {
    slideImage.src = `./slides/${chapter.no}.jpg`;
    location.hash = `#slide-${chapter.no}`;
  });
}

const chapterTree = document.getElementById('chapter-tree') as HTMLDivElement;
for (const chapter of cidocCrmChapters) {
  const div = document.createElement('div');
  div.classList.add('tree-entry');
  div.innerText = chapter.title;
  chapterTree.appendChild(div);
  div.addEventListener('click', () => {
    videoElement.currentTime = chapter.timeInSeconds;
    slideImage.src = `./slides/${chapter.no}.jpg`;
    location.hash = `#slide-${chapter.no}`;
  })
}

slideImage.src = `./slides/1.jpg`;
location.hash = `#slide-1`;
