import { useStoryblokApi} from '@storyblok/astro';

async function getAllShows() {
  let stories
  
  async function getAll() {

    const sbApi = useStoryblokApi();
    const {data} = await sbApi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'shows/',
      is_startpage: 0,
    }); 
    
  }
}


async function getNextShow() {
  const sbApi = useStoryblokApi();

  const { data } = await sbApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'shows/',
    is_startpage: 0,
  }); 
  const stories = data.stories

  const currentDate = new Date()
  let lastShow;
  let nextShow;

  for (const story of stories) {
    const storyDate = new Date(story.content.date)
    if(storyDate > currentDate) {
      if(!nextShow) nextShow = story
      if(storyDate < new Date(nextShow.content.date)) nextShow = story
    }
    if(storyDate < currentDate) {
      if(!lastShow) lastShow = story
      if(storyDate > new Date(lastShow.content.date)) lastShow = story
    }
  }
  return nextShow ? {status: 'Next', show: nextShow} : {status: 'Last', show: lastShow}
}

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
return formattedDate
  
}

export { getFormattedDate, getNextShow }