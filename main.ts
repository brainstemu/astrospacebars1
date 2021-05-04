scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.beamUp.play()
    tiles.setTileAt(location, sprites.dungeon.greenOuterSouthEast)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level1`)
let Astro = sprites.create(assets.image`Astro Space Bars 1`, SpriteKind.Player)
scene.cameraFollowSprite(Astro)
controller.moveSprite(Astro, 150, 150)
tiles.placeOnRandomTile(Astro, sprites.dungeon.stairLadder)
info.startCountdown(30)
