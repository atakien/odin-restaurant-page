import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function initializePage(){
    createHomePage();
    createMenuPage();
    createContactPage();
}

export default initializePage;