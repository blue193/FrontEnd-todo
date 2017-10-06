export class Todo {
  title: String = '';
  complete: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
