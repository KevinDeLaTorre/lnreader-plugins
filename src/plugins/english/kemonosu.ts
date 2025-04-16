import { Plugin } from '@typings/plugin';
import { fetchApi } from '@libs/fetch';
import { NovelStatus } from '@libs/novelStatus';
import dayjs from 'dayjs';

class KemonoSu implements Plugin.PluginBase {
  id = 'kemonosu';
  name = 'kemono.su';
  version = '1.0.5';
  site = 'https://kemono.su/';
  api = this.site + 'api/v1/';
  icon = 'src/en/kemonosu/icon.png';

  path_of_ascension_cover =
    'https://static.wikia.nocookie.net/empirenet/images/7/79/The_Path_of_Ascension_cover.jpg';

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async popularNovels(): Promise<Plugin.NovelItem[]> {
    const novels: Plugin.NovelItem[] = [];

    const path_of_ascension_novel = {
      name: 'The Path of Ascension',
      path: 'patreon/user/47400827',
      cover: this.path_of_ascension_cover,
    };

    novels.push(path_of_ascension_novel);

    return novels;
  }

  async searchNovels(searchTerm: string): Promise<Plugin.NovelItem[]> {
    const novels: Plugin.NovelItem[] = [];

    const path_of_ascension_novel = {
      name: 'The Path of Ascension',
      path: 'patreon/user/47400827',
      cover: this.path_of_ascension_cover,
    };

    if (
      searchTerm.toLowerCase().includes('path') ||
      searchTerm.toLowerCase().includes('ascension')
    ) {
      novels.push(path_of_ascension_novel);
    }

    return novels;
  }

  async parseNovel(novelPath: string): Promise<Plugin.SourceNovel> {
    const result = await fetchApi(this.api + novelPath + '/posts-legacy');
    const json_novel_data = await result.json();

    const novel: Plugin.SourceNovel = {
      path: novelPath,
      name: 'The Path of Ascension',
      cover: this.path_of_ascension_cover,
      summary: `The story follows Matt, a young man planning to delve the rifts responsible for the monsters that destroyed his city and killed his parents. His dreams are crushed when his Tier 1 Talent is rated as detrimental, and no guild or group will take him.
Working at a nearby inn, he meets a mysterious and powerful couple. They give him a chance to join The Path of Ascension, an empire wide race to ascend the Tiers and become living legends.
With their recommendation and a stolen skill, Matt begins his journey to the peak of power.`,
      chapters: [],
    };

    novel.status = NovelStatus.Ongoing;
    novel.author = 'C. Mantis';
    novel.genres = 'progression fantasy, action, adventure, fantasy, romance';

    const chapters: Plugin.ChapterItem[] = [];

    const total_chapter_count = json_novel_data.props.count;

    const page_count = Math.floor(total_chapter_count / 50);

    for (let i = 0; i <= page_count; i++) {
      const page_result = await fetchApi(this.api + novelPath + '?o=' + i * 50);
      const json_page_data = await page_result.json();

      json_page_data.forEach((chapter: any) => {
        const chapterName = chapter.title;

        // Check if chapterName matches the format "Chapter N"
        const match = /^Chapter (\d+)$/.exec(chapterName);
        if (match) {
          const chapterNumber = parseInt(match[1], 10); // Extract the chapter number
          const releaseDate = dayjs(chapter.published).toISOString();
          const chapterPath = novelPath + '/post/' + chapter.id;

          chapters.push({
            name: chapterName,
            chapterNumber: chapterNumber, // Set the chapter number
            releaseTime: releaseDate,
            path: chapterPath,
          });
        }
      });

      this.sleep(500);
    }

    novel.chapters = chapters.reverse();

    return novel;
  }

  async parseChapter(chapterPath: string): Promise<string> {
    const chapter_result = await fetchApi(this.api + chapterPath);
    const chapter_json = await chapter_result.json();

    return chapter_json.post.content;
  }
}

export default new KemonoSu();
