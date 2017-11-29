var THREEDEMO = THREEDEMO || {}

THREEDEMO.info = function(headerText) {

  this.lines = [];

  this.header = document.createElement('h4');
  this.header.innerHTML = headerText;
  this.body = document.createElement('p');
  this.el = document.createElement('div');
  this.el.className = 'info';
  this.el.appendChild(this.header);
  this.el.appendChild(this.body);
  document.body.appendChild(this.el);

  this.setBody = function(str) {
    this.body.innerHTML = str;
  }

}
