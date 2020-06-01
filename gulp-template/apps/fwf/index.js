//引入css
import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/styles.css'
//引入js
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from './src/components/header/Header'

const App=function(){
    var dom=document.getElementById('app');
    let header = new Header();
    dom.innerHTML=header.tpl;
}
new App();