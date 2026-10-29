# Chapter 6: Objects

## Extending objects:

Intersection:

```
type Album = { 
    title: string;
    artist: string;
    releaseYear: number;
}

type SalesData = {
    unitsSold: number;
    revenu: number;
}

type Albumsales = Album & SalesData;

/* 

AblumSales = {
    title: string;
    artist: string;
    releaseYear: number;
    unitsSold: number;
    revenu: number;
}

*/
```

Interfaces: 
```
interface Album {
    title: string;
    artist: string;
    releaseYear: number;
}
```

Interface can extend to other types, plain types cannot.
Interface extends is better because: 

1. Beter error handling: i.e. when types have the same key with diffrent types i.e. age: string, age: number.
2. Better TypeScript performance: intersections are recomputed every time it is used. Interfaces can be cached by TypeScript.

## Types vs. Interfaces:

Types can represent anything: union types, object ytpes, intersection types and more.
An interface type can only represent object types and functions.

## Dynamic Object Keys

1. Index Signatures

```
type = AwardsListing{
    [index: string]: boolean
}

const albumAwards: AwardsListing = {};

albumAwards.Grammy = true
```

2. Record type
```
const albumAwards: Record<string, boolean> =[];
albumAwards.Grammy = true
```

3. Index Signature with the PropertyKey
```
type = AwardsListing{
    [index: PropertyKey]: boolean // PropertyKey = string | number | symbol;
}

const albumAwards: AwardsListing = {};

albumAwards.Grammy = true
```

## Unity Types:

```
interface Album {
    title: string;
    artist: string;
    releaseYear: number;
    genre: string;
}
```


1. Partial: makes all properties optional ```type PartialAlbum = Partial<Album>```
2. Required: makes all properties required (even if it was optionial) ```type RequiredAlbum = Required<Album>```
3. Pick: pick the properties you want to maintain ```type AlbumData = Pick<Album, "title" | "artist">```
4. Omit: omit the properties you want to remove: ```type AlbumData = Omit<Album, "releaseYear" | "genre">```