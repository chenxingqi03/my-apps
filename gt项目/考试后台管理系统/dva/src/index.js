
import dva from 'dva'
import router from '@/router'
import history from '@/utils/history'
import { createModel } from '@/store'
import 'antd/dist/antd.css'
import './index.css'
const app = dva({
    history: history,
});
createModel(app)
app.router(router)
app.start('#root')

