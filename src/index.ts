/**
 * Returns a non-nullable value.
 * If value is null or undefined, returns the provided defaultValue.
 */
export function defaultValueTo<T>(
  value: T,
  defaultValue: NonNullable<T>
): NonNullable<T> {
  return (value ?? defaultValue) as NonNullable<T>;
}
