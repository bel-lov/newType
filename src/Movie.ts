import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly year: number,
        readonly name: string,
        readonly country: string,
        readonly slogan: string,
        readonly genre:  object,
        readonly time: number) {
        
    }
};