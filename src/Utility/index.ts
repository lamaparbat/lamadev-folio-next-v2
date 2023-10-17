import {
    startCase,
    toLower
} from 'lodash';

export const getTitleCase = (word: string): string => {
    if(!word || !word?.length) return '';
    return startCase(toLower(word));
}