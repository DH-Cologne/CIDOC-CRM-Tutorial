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
