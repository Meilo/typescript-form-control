import GetFormDataUseCase from "../GetFormDataUseCase";
import FormPresenter from "../../../adapters/presenters/FormPresenter";

const formPresenter = new FormPresenter();
const initialData = { firstname: "foo", lastname: "foo" };
test("Should return an empty form data", () => {
  const usecase = new GetFormDataUseCase();
  usecase.execute({ formPresenter, initialData: {} });
  expect(formPresenter.vm.data).toStrictEqual({});
});

test("Should return an initial form data", () => {
  const usecase = new GetFormDataUseCase();
  usecase.execute({ formPresenter, initialData });
  expect(formPresenter.vm.data).toStrictEqual(initialData);
});

test("Should add a new string field in data", () => {
  const newData = {
    email: "foo@bar.fr",
  };
  const usecase = new GetFormDataUseCase();
  usecase.execute({ formPresenter, newData, initialData });
  expect(formPresenter.vm.data).toStrictEqual({ ...initialData, ...newData });
});

test("Should add a new array field in data", () => {
  const newData = [{ mobile: "333-333-333", standard: "555-555-555" }];
  const usecase = new GetFormDataUseCase();
  usecase.execute({ formPresenter, newData, initialData });
  expect(formPresenter.vm.data).toStrictEqual({ ...initialData, ...newData });
});
