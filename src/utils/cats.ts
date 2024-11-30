import CatLaki from '../assets/cat-laki.png';
import CatBasilio from '../assets/cat-basilio.png';
import CatSue from '../assets/cat-sue.png';

interface CatsDataConfig {
  	/** Тип маркера сверху изображения */
	level?: 'warning' | 'ok';
  	/** Текст маркера */
	markerText?: string;
	/** Заголовок карточки */
	title: string;
	/** Текст в карточке */
	text: string;
	/** Ссылка на изображение */
	url: string;
};

export const catsData: CatsDataConfig[] = [
	{
		level: 'warning',
		markerText: 'NEW',
		title: 'Кот Лаки',
		text: 'Крайне спокойный, ласковый малыш, который медленно, но уверенно перестаёт быть робким скромнягой',
		url: CatLaki
	},
	{
		title: 'Кот Базилио',
		text: 'Прошлые хозяева отказались от него, и долгое время ему пришлось быть на передержке, привыкая к новой жизни.',
		url: CatBasilio
	},
	{
		level: 'ok',
		markerText: 'ЛАСКОВЫЙ',
		title: 'Кошка Сью',
		text: 'Эта юная красавица очень общительная и ласковая уже с первого дня, как приехала в кафе',
		url: CatSue
	}
];