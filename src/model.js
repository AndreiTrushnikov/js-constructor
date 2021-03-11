import image from './assets/image.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks';

const text = 'Конструктор сайтов на чистом JS'

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            background: '#004499',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: 'Это картинка'
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock([
        'Приложение на чистом JS, без использования библиотек',
        'Конструктор сайтов',
        'JavaScript - это интересно! Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
];