export class Todo {
  order: Number = 0;
  title: String = '';
  complete: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
