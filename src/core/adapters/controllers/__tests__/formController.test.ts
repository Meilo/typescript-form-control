import GetFormDataUseCase from "../../../domain/usecases/GetFormDataUseCase";
import ResetFormDataUseCase from "../../../domain/usecases/ResetFormDataUseCase";
import FormPresenter from "../../presenters/FormPresenter";
import FormController from "../FormController";

const formPresenter = new FormPresenter();
const controller = new FormController(
  {
    getFormDataUseCase: new GetFormDataUseCase(),
    resetFormDataUseCase: new ResetFormDataUseCase(),
  },
  formPresenter,
  { email: "foo@bar" }
);

test("Should dispatch initial data on form", () => {
  controller.dispatch();
  expect(formPresenter.vm.data).toStrictEqual({ email: "foo@bar" });
});

test("Should dispatch new data on form", () => {
  controller.dispatch({ private: false });
  expect(formPresenter.vm.data).toStrictEqual({
    email: "foo@bar",
    private: false,
  });
});

test("Should reset form data", () => {
  controller.reset();
  expect(formPresenter.vm.data).toStrictEqual({ email: "foo@bar" });
});

test("Should clear form data", () => {
  controller.reset(true);
  expect(formPresenter.vm.data).toStrictEqual({});
});
