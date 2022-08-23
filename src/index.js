const content = document.getElementById('content')

import './style.css';
import { renderHeader } from './header.js';
import { renderFooter} from './footer.js'


  
  content.append(renderHeader());
  content.append(renderFooter())