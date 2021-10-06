import FormController from "../core/adapters/controllers/FormController";
import GetFormDataUseCase from "../core/domain/usecases/GetFormDataUseCase";
import ResetFormDataUseCase from "../core/domain/usecases/ResetFormDataUseCase";
import FormPresenter from "../core/adapters/presenters/FormPresenter";

const formPresenter = new FormPresenter();
const formController = new FormController(
  {
    getFormDataUseCase: new GetFormDataUseCase(),
    resetFormDataUseCase: new ResetFormDataUseCase(),
  },
  formPresenter,
  {}
);

const formControl = {
  data: formPresenter.vm.data,
  dispatch: formController.dispatch,
  reset: formController.reset,
};

export default formControl;
