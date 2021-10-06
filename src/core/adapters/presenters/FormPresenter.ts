import Presenter from "./presenter";

interface FormPresenterType {
  displayFormData: (data: {}) => void;
  displayInitialData: (initialData: {}) => void;
  resetForm: () => void;
  clearForm: () => void;
}

class FormPresenterVM {
  data: {};
  initialData: {};
}

export default class FormPresenter
  extends Presenter<FormPresenterVM>
  implements FormPresenterType
{
  constructor() {
    super(new FormPresenterVM());
  }

  displayInitialData(initialData: {}) {
    this.vm.initialData = initialData;
  }

  displayFormData(data: {}) {
    this.vm.data = data;
  }

  resetForm() {
    this.vm.data = this.vm.initialData;
  }

  clearForm() {
    this.vm.data = {};
  }
}
