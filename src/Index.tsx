import ReactDOM from 'react-dom/client';
import Router from './router/index.tsx';
import { RecoilRoot } from 'recoil';

import 'virtual:uno.css';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <Router />
    </RecoilRoot>,
);
