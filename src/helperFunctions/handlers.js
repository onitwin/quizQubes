export function updateClasses(target, classNameToAdd) {
  const targetClassName = `#${target}`;
  document.querySelector(targetClassName).classList.toggle(`${classNameToAdd}`);
  console.log(
    `Adding ${classNameToAdd} to existing target with className ${target}`,
  );
}
