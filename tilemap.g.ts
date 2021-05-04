// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000090a0a0a0a0a0a0a0a0a0a0a0a0a0a08030c100b050505240505050503181907030e290f14211420141414141b261a070312020d07130a0a0a0a0a0a04050507031303010713030101010101010101070313030107130505050505050505050a0313030107151414211414141414270703130301010a0a0a13030a0a0a0a0a0703130301010101071303050505050507031303010101010722141414141416070313030101071f14170a0a0a1c0a130703130301010713232a2307111e2513070313050505051323282305051d05130703151414141420142014141414141707030a0a0a0a0a0a0a0a0a0a0a0a0a0a0704050505050505050505050505050506`, img`
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.doorOpenWest,sprites.dungeon.doorClosedNorth,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.hazardHole,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.dungeon.floorLightMoss,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
