import FormPresenter from "../../adapters/presenters/FormPresenter";

interface GetFormDataUseCaseExecuteType {
  formPresenter: FormPresenter;
  newData?: {};
  initialData: {};
}

interface GetFormDataUseCaseType {
  execute: (data: GetFormDataUseCaseExecuteType) => void;
}

export default class GetFormDataUseCase implements GetFormDataUseCaseType {
  constructor() {}

  execute({
    formPresenter,
    newData,
    initialData,
  }: GetFormDataUseCaseExecuteType) {
    formPresenter.displayInitialData(initialData);
    return formPresenter.displayFormData({ ...initialData, ...newData });
  }
}
