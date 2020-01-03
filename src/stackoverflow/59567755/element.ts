class MyElement {
  active = true;
  constructor() {
    this._handleClickOutside = this._handleClickOutside.bind(this);
    window.addEventListener("click", this._handleClickOutside);
  }
  _handleClickOutside() {
    console.log("calling real");
    this.active = false;
  }
}

export default MyElement;
