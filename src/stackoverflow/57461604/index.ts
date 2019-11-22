import $ from "jquery";

export function myFunc(element) {
  const htmlControl = $(element);
  const tagName = htmlControl.prop("tagName");
}
