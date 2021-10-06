import GetFormDataUseCase from "../../domain/usecases/GetFormDataUseCase";
import ResetFormDataUseCase from "../../domain/usecases/ResetFormDataUseCase";
import FormPresenter from "../presenters/FormPresenter";

interface FormControllerType {
  dispatch: (newData: Object) => void;
  reset: () => void;
}

export default class FormController implements FormControllerType {
  constructor(
    private usecase: {
      getFormDataUseCase: GetFormDataUseCase;
      resetFormDataUseCase: ResetFormDataUseCase;
    },
    private formPresenter: FormPresenter,
    private initialData: {}
  ) {}

  dispatch(newData: {} = undefined) {
    this.usecase.getFormDataUseCase.execute({
      formPresenter: this.formPresenter,
      newData,
      initialData: this.initialData,
    });
  }

  reset(clearData: boolean = undefined) {
    this.usecase.resetFormDataUseCase.execute(this.formPresenter, clearData);
  }
}
