type Mods = {
  [cls: string]: boolean | string;
};

export function classNames(
  cls: string,
  mode: Mods,
  additionaly: string[]
): string {
  return [
    cls,
    ...additionaly,
    Object.entries(mode)
      .filter(([_, value]) => !!value)
      .map(([cls, _]) => cls),
  ].join(" ");
}
