import Controller from './controller';
import {$on} from './helpers';
import Template from './template';
import Store from './store';
import View from './view';
import Tags from './tags';

const store = new Store();
const template = new Template();
const view = new View(template);
const tags = new Tags();

const controller = new Controller(store, view, tags);

const setView = () => controller.setView();
$on(window, 'load', setView);
