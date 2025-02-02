export const makeDataAttribute = {
  base: () => `data-menu`,
  part: (name: string) => `${makeDataAttribute.base()}-${name}`,
  section: (id?: string) => ({
    [makeDataAttribute.part("section")]: id
  }),
  item: (id?: string, value?: string) => ({
    [makeDataAttribute.part("item-id")]: id,
    [makeDataAttribute.part("item-value")]: value
  })
};
