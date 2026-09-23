const acceptsObj = (obj: { foo: string; bar: number; bax: boolean }) => {};

acceptsObj({bar: 42, foo: "Answer to the Ultimate Question of Life, the Universe, and Everything", bax: true})