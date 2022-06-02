import { RouterLink, RouterView } from 'vue-router'
import { MyRouteType } from './types'
import './assets/css/layout.css'


export default (props: {
  routes: MyRouteType[]
}) => {
  console.log(props.routes, '==routes');
  
  return <>
    <header>
      <h2>VUE3</h2>
    </header>
    <div class="body">
      <ul class="menu">
        {
          props.routes.map(x => {
            return (
              <li key={x.key}>
                <RouterLink to={x.path}>{x.key}</RouterLink>
              </li>
            )
          })
        }
      </ul>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </>
}