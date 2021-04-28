scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level1`)
let Astro = sprites.create(assets.image`Astro Space Bars 1`, SpriteKind.Player)
scene.cameraFollowSprite(Astro)
controller.moveSprite(Astro, 150, 150)
tiles.placeOnRandomTile(Astro, sprites.dungeon.stairLadder)
info.startCountdown(30)
