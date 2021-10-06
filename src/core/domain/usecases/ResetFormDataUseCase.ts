import FormPresenter from "../../adapters/presenters/FormPresenter";

interface ResetFormDataUseCaseType {
  execute: (formPresenter: FormPresenter, clearData: boolean) => void;
}

export default class ResetFormDataUseCase implements ResetFormDataUseCaseType {
  constructor() {}

  execute(formPresenter: FormPresenter, clearData: boolean = false) {
    if (clearData) formPresenter.clearForm();
    else formPresenter.resetForm();
  }
}
