import Marionette from 'backbone.marionette'

import HomeView from '../sections/home/script'

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new HomeView())
  }
})
