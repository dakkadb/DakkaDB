import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('myDecks');
  this.route('decklists');
  this.route('cards');
  this.route('factions', function() {
    this.route('astraMilitarum');
    this.route('spaceMarines');
    this.route('ork');
    this.route('chaos');
    this.route('eldar');
    this.route('darkEldar');
    this.route('tau');
    this.route('tyranids');
    this.route('necrons');
  });
  this.route('register');
  this.route('forum');
});

export default Router;
