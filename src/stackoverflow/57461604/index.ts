import $ from 'jquery';

export function myFunc(element) {
  var htmlControl = $(element);
  var tagName = htmlControl.prop('tagName');
}
