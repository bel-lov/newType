import Movie from '../Movie';
import Cart from '../Cart';
// import Buyable from './Buyable';

const movie = new Movie(1,'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика, боевик, фэнтази, приключения'], 137, 200);

test('Movie', () => {
	expect(movie).toEqual({
        id: 1,
		name: 'Мстители',
		year: 2012,
		country: 'США',
		slogan: 'Avengers Assemble!',
		genre: ['фантастика, боевик, фэнтази, приключения'],
		time: 137,
		price: 200,
	}
	);
});
test('add Movie', () => {
    const cart = new Cart();
    const movie = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика, боевик, фэнтази, приключения'], 137, 200);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
});
test('get total', () => {
    const cart = new Cart();
    const movie1 = new Movie(2,'жизнь программиста', 2000, 'Россия', "от винта", ['боевик','триллер'],100, 200);
    const movie2 = new Movie(3,'жизнь программиста2', 2022, 'Россия', "от винта", ['боевик','триллер'],100, 500);
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.getTotal()).toBe(700);
});

test('get discout', () => {
    const cart = new Cart();
    const movie1 = new Movie(2, 'жизнь программиста', 2000, 'Россия', "от винта", ['боевик','триллер'],100, 200);
    const movie2 = new Movie(3, 'жизнь программиста2', 2022, 'Россия', "от винта", ['боевик','триллер'],100, 500);
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.getDiscout(10)).toBe(630);
});
test('delete', () => {
    const cart = new Cart();
    const movie1 = new Movie(2,'жизнь программиста', 2000, 'Россия', "от винта", ['боевик','триллер'],100, 200);
    const movie2 = new Movie(3,'жизнь программиста2', 2022, 'Россия', "от винта", ['боевик','триллер'],100, 500);
    cart.add(movie1);
    cart.add(movie2);
    cart.deleteId(2);
    expect(cart.items.length).toBe(1);
});