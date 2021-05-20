import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];  // array

    if (!validPublishers.includes(publisher)) {  // if 
        throw new Error(`Publisher "${publisher}" It is wrong`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}