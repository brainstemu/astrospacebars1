// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000090a0a0a0a0a0a0a0a0a0a0a0a0a0a08030c100b0505052605050505031a1b07030e110f15231522151515151d191c070313020d07140a0a0a0a0a0a04050507031403010714030101010101010101070314030107140505050505050505050a0314030107161515231515151515010703140301010a0a0a14030a0a0a0a0a0703140301010101071403050505050507031403010101010724151515151517070314030101072115180a0a0a1e0a1407031403010107142525250712202714070314050505051425132505051f05140703161515151522152215151515151807030a0a0a0a0a0a0a0a0a0a0a0a0a0a0704050505050505050505050505050506`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 . 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . 2 . 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . . 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . 2 2 2 2 2 2 2 
2 . 2 . . . 2 2 . . . . . . . 2 
2 . 2 . . 2 . . . 2 2 2 . 2 . 2 
2 . 2 . . 2 . 2 2 2 2 . . . . 2 
2 . 2 2 2 2 . 2 . 2 2 2 . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.doorOpenWest,sprites.dungeon.doorClosedNorth,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.hazardHole,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.dungeon.floorLightMoss,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
