import Marionette from 'backbone.marionette'

import './style.styl'
import template from './template.hbs'

export default Marionette.View.extend({
  template: template()
})
