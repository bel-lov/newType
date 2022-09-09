import Movie from '../Movie';
import Cart from '../Cart';

const movie = new Movie('Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика, боевик, фэнтази, приключения'], 137 );

test('Movie', () => {
	expect(movie).toEqual({
		name: 'Мстители',
		year: 2012,
		country: 'США',
		slogan: 'Avengers Assemble!',
		genre: ['фантастика, боевик, фэнтази, приключения'],
		time: 137,
		}
	);
});