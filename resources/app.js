import './css/app.css';
import { picoapp } from 'picoapp';
import header from '~/js/layout/header';

const app = picoapp({
    header,
});

app.mount();

export default app;
