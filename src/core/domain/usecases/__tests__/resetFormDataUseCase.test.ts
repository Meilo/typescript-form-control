import GetFormDataUseCase from "../GetFormDataUseCase";
import FormPresenter from "../../../adapters/presenters/FormPresenter";
import ResetFormDataUseCase from "../ResetFormDataUseCase";

const formPresenter = new FormPresenter();
const initialData = { firstname: "foo", lastname: "foo" };
const getFormDataUsecase = new GetFormDataUseCase();

test("Should reinitialize form data", () => {
  getFormDataUsecase.execute({
    formPresenter,
    newData: { email: "foo@bar.fr" },
    initialData,
  });
  expect(formPresenter.vm.data).toStrictEqual({
    ...initialData,
    email: "foo@bar.fr",
  });
  const resetFormDataUsecase = new ResetFormDataUseCase();
  resetFormDataUsecase.execute(formPresenter);
  expect(formPresenter.vm.data).toStrictEqual(initialData);
});

test("Should clear form data", () => {
  getFormDataUsecase.execute({
    formPresenter,
    newData: { email: "foo@bar.fr" },
    initialData,
  });
  expect(formPresenter.vm.data).toStrictEqual({
    ...initialData,
    email: "foo@bar.fr",
  });
  const resetFormDataUsecase = new ResetFormDataUseCase();
  resetFormDataUsecase.execute(formPresenter, true);
  expect(formPresenter.vm.data).toStrictEqual({});
});
