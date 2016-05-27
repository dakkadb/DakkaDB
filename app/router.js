import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('myDecks');
  this.route('decklists');
  this.route('cards');
  this.route('factions');
});

export default Router;
