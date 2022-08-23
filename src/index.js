const content = document.getElementById('content')

import './style.css';
import { renderHeader } from './header';
import { renderFooter} from './footer'
import { renderMain } from './main';



  
  content.append(renderHeader());
  content.append(renderMain())
  content.append(renderFooter())