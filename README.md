# Clothes-Factory-PLNI

- [Clothes-Factory-PLNI](#clothes-factory-plni)
  - [Features](#features)
    - [Clothes](#clothes)
    - [Sizes](#sizes)
    - [Shapes](#shapes)
    - [Colors](#colors)
    - [Necks](#necks)
    - [Image](#image)
      - [ImageTypes](#imagetypes)
      - [ImagePlaces](#imageplaces)
      - [ImageSizes](#imagesizes)
    - [Prices](#prices)
  - [Mutex](#mutex)
  - [Requires](#requires)

Production of images on chest clothes

## Features

### Clothes

- T-shirt
- Shirt
- Hoodie
- Sweetshirt
- Tank top

### Sizes

- XXS
- XS
- S
- M
- L
- XL
- XXL

### Shapes

- Man
- Woman
- Baggy
- Skinny

### Colors

- Black
- White
- Cream
- Pastel Green
- Dark Red
- Gray
- Lilac
- Light blue

### Necks

- V shape
- U shape
- Round shape
- Turtle neck

### Image

#### ImageTypes

- Prints
- Sewed
- Full-sewed
- Painted

#### ImagePlaces

- Right sleeve
- Left sleeve
- Right shoulder
- Left shoulder
- Chest
- Chest left
- Chest right
- belly
- Top back
- Below back

#### ImageSizes

- Small
- Medium
- Large

### Prices

- Rag
- Cheap
- Average price
- Expensive
- Luxurious

## Mutex

- Clothes.T-Shirt, Clothes.Sweeter, Clothes.TankTop `mutex` Neck.Shirt
- Clothes.Hoodie, Clothes.TankTop `mutex` Neck.Turtle
- Clothes.TankTop `mutex` ImagePlaces.LeftSleeve, ImagePlace.RightSleeve, ImagePlace.LeftShoulder, ImagePlace.RightShoulder
- Clothes.T-Shirt `mutex` ImagePlace.LeftSleeve, ImagePlace.RightSleeve
- ImageSize.Large `mutex` ImagePlace.LeftSleeve, ImagePlace.RightSleeve, ImagePlace.LeftShoulder, ImagePlace.RightShoulder, ImagePlace.LeftChest, ImagePlace.RightChest

## Requires

- Clothes.Shirt `requires` Neck.Shirt
- Clothes.Hoodie `requires` Shapes.Baggy
