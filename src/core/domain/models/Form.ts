export interface Form<T> {
  data: T;
  validator: (data: T) => void;
  send: (data: T) => void;
  errors: ReadonlyArray<{ field: string; error: string }>;
  displayErrors: () => void;
  resetForm: () => void;
}
